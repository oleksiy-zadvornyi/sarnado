import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import ButtonTime from '../../../../UI/Button/ButtonTime';
import ButtonColor from '../../../../UI/Button/ButtonColor';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import * as Images from '../../../../../helpers/images';
import {navigate} from '../../../../../helpers/navigation';
import {workTime} from '../../../../../helpers/constants';
import {_fetchError, getFrom, getTill} from '../../../../../helpers';

// Api
import {postOrderCheckCheckType} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Buy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexes: [],
      allIndexes: true,
    };
  }

  onPressNext = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {indexes, allIndexes} = this.state;
    const {location} = this.props.prevProps;
    if (!allIndexes && indexes.length === 0) {
      showToast('Выберите время или интервалы');
      return;
    }

    const from = getFrom(indexes);
    const till = getTill(indexes);
    const data = {
      country: location.country.code,
      state: location.state ? location.state.code : null,
      city: location.city ? location.city.code : null,
      from: !allIndexes && from ? from.value.start : null,
      till: !allIndexes && till ? till.value.end : null,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'work_time'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          indexes,
          allIndexes,
        };
        navigate('Step8', {prevProps});
      })
      .catch((e) => _fetchError(this.props, e, 'postOrderCheckCheckType'))
      .finally(() => showNetworkIndicator(false));
  };

  onPressButton = (index) => {
    const {indexes} = this.state;
    const min = Math.min(...indexes);
    const max = Math.max(...indexes);
    if (index >= min && index <= max) {
      this.setState({
        allIndexes: false,
        indexes: indexes.filter((e) => e !== index),
      });
    } else {
      const ind = [...indexes, index];
      if (
        ind.filter((e) => e === 0).length > 0 &&
        ind.filter((e) => e === 3).length > 0
      ) {
        this.setState({
          allIndexes: true,
          indexes: [],
        });
      } else {
        this.setState({
          allIndexes: false,
          indexes: [...indexes, index],
        });
      }
    }
  };

  onPressAll = () => {
    const {allIndexes} = this.state;
    this.setState({allIndexes: !allIndexes, indexes: []});
  };

  render() {
    const {indexes, allIndexes} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на покупку" />}>
        <WrapCircle title="7" />

        <Text style={base.text1}>
          Выберите время или интервалы в которое вы будете активно реагировать
          на заявки
        </Text>

        {workTime.map((e, i) => (
          <ButtonTime
            key={i}
            styleTouchable={base.margin1}
            timeOfDay={e.timeOfDay}
            time={e.time}
            icon={Images.time}
            index={e.id}
            indexes={indexes}
            allIndexes={allIndexes}
            onPress={this.onPressButton}
          />
        ))}

        <ButtonColor
          styleTouchable={base.margin1}
          style={[base.button1, allIndexes && base.buttonSelect1]}
          styleText={[base.buttonText1, allIndexes && base.buttonTextSelect1]}
          title="Круглосуточно"
          onPress={this.onPressAll}
        />

        <View style={base.flex} />
        <Text style={base.text2}>
          В это время или интервалы, ваши ордера будут доступны пользователям и
          будут отображаться в терминале. Во время, когда вы недоступны - ордера
          будут скрыты.
        </Text>
        <View style={base.flex} />

        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
