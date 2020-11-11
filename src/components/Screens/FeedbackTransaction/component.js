import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Wrap from '../../UI/Base/Wrap';
import WrapBack from '../../UI/Wrap/WrapBack';
import ButtonColor from '../../UI/Button/ButtonColor';

// Helpers
import * as Images from '../../../helpers/images';
import {_fetchError} from '../../../helpers';
import {replace} from '../../../helpers/navigation';

// Api
import {postReviewsStore} from '../../../store/api/deal';

// Style
import {base} from './styles';

export default class FeedbackTransaction extends React.Component {
  constructor(props) {
    super(props);

    const id = props.route.params?.id ?? 0;
    this.state = {
      id,
      feedback: '',
      thumbIndex: -1,
    };
  }

  onChangeFeedback = (feedback) => this.setState({feedback});

  onPressThumbUp = () => this.setState({thumbIndex: 0});
  onPressThumbDown = () => this.setState({thumbIndex: 1});

  done = () => {
    const {id, feedback, thumbIndex} = this.state;
    const {user, showToast, showNetworkIndicator} = this.props;
    if (thumbIndex === -1) {
      showToast('Поставте лайк или дизлайк');
      return;
    }
    if (feedback.length === 0) {
      showToast('Оставьте свой комментарий');
      return;
    }
    const path = {
      id,
      is_liked: thumbIndex === 0 ? false : true,
      text: feedback,
    };
    console.log(path);
    showNetworkIndicator(true);
    postReviewsStore({path, user})
      .then(() => replace('ChooseTheRide'))
      .catch((e) => _fetchError(this.props, e, 'postReviewsStore'))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {feedback, thumbIndex} = this.state;
    return (
      <Wrap titleView={<WrapBack title="Отзыв о сделке" />}>
        <View style={base.wrap1}>
          <Text style={base.text1}>Ваш отзыв</Text>
          <TextInput
            style={base.text2}
            value={feedback}
            placeholderTextColor="#5A5A5A"
            multiline
            maxLength={250}
            onChangeText={this.onChangeFeedback}
          />
          <Text style={base.text1}>Ваша оценка сделки</Text>
          <View style={base.wrap2}>
            <Image
              style={base.wrap3}
              source={thumbIndex === 0 ? Images.thumbUpFill : Images.thumbUp}
              width={wp(20)}
              onPress={this.onPressThumbUp}
            />
            <Image
              style={base.wrap4}
              source={
                thumbIndex === 1 ? Images.thumbDownFill : Images.thumbDown
              }
              width={wp(20)}
              onPress={this.onPressThumbDown}
            />
          </View>
        </View>
        <View style={base.flex} />
        <ButtonColor
          styleTouchable={base.margin1}
          style={base.button1}
          title="Оставить отзыв"
          onPress={this.done}
        />
      </Wrap>
    );
  }
}
