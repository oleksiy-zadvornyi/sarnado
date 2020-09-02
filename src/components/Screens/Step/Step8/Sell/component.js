import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';
import InputText from '../../../../UI/Input/InputText';

// Helpers
import {navigate} from '../../../../../helpers/navigation';
import {_fetchError} from '../../../../../helpers';

// Api
import {postOrderCheckCheckType} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Sell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      errors: [],
    };
  }

  onPressNext = () => {
    const {user, showNetworkIndicator} = this.props;
    const {name, description} = this.state;

    const data = {
      title: name,
      text: description,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'msg'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          name,
          description,
        };
        this.setState({errors: []});
        navigate('Step9', {prevProps});
      })
      .catch((e) => {
        const errors = _fetchError(this.props, e, 'postOrderGetExchangeRates');
        if (errors) {
          this.setState({errors});
        }
      })
      .finally(() => showNetworkIndicator(false));
  };

  onChangeName = (name) => this.setState({name});
  onChangeDescription = (description) => this.setState({description});

  refDescription = (ref) => (this.description = ref);
  nextDescription = () => this.description.focus();

  done = () => {};

  render() {
    const {name, description, errors} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="8" />

        <Text style={base.text1}>
          Напишите заголовок для вашего предложения
        </Text>

        <InputText
          style={base.input1}
          title="Например: Продаю круглосуточно!"
          returnKeyType="next"
          value={name}
          hasError={errors.filter((e) => e === 'title').length > 0}
          onChangeText={this.onChangeName}
          onSubmitEditing={this.nextDescription}
        />

        <InputText
          ref={this.refDescription}
          style={base.input2}
          title="Например: Предпочитаю верифицированных пользователей..."
          multiline
          hasError={errors.filter((e) => e === 'text').length > 0}
          value={description}
          onChangeText={this.onChangeDescription}
        />

        <View style={base.flex} />
        <Text style={base.text2}>
          Заголовок и описание условий сотрудничества, позволяет партнерам
          получить максимальное представление до открытия сделки и помогает
          подготовиться или принять решение. Сделайте его максимально
          информативным.
        </Text>
        <View style={base.flex} />

        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
