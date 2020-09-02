import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import PickerLarge from '../../../../UI/Picker/PickerLarge';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';
import {_fetchError} from '../../../../../helpers';

//Api
import {getPairs} from '../../../../../store/api/service';
import {
  getOrderGetFiats,
  postOrderCheckCheckType,
} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: [],
      fiat: [],
      indexDirection: -1,
      indexFiat: -1,
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    showNetworkIndicator(true);
    getPairs({user})
      .then((result) => this.setState({directions: result.data.directions}))
      .catch((e) => _fetchError(this.props, e, 'getPairs'))
      .finally(() => showNetworkIndicator(false));
  }

  onPressNext = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {directions, indexDirection, fiat, indexFiat} = this.state;
    const {crypto} = this.props.prevProps;
    if (indexDirection === -1) {
      showToast('Выберите способ покупки');
      return;
    }
    if (indexFiat === -1) {
      showToast('Выберите валюту');
      return;
    }

    const data = {
      crypto: crypto.id,
      direction: directions[indexDirection].code,
      fiat: fiat[indexFiat].id,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'direction_fiat'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          direction: directions[indexDirection],
          fiat: fiat[indexFiat],
        };
        navigate('Step3', {prevProps});
      })
      .catch((e) => _fetchError(this.props, e, 'postOrderCheckCheckType'))
      .finally(() => showNetworkIndicator(false));
  };

  onSelect1 = (e, i) => this.setState({indexDirection: i}, this.fetchFiats);
  onSelect2 = (e, i) => this.setState({indexFiat: i});

  fetchFiats = () => {
    const {user, showNetworkIndicator} = this.props;
    const {directions, indexDirection} = this.state;
    showNetworkIndicator(true);
    this.setState({fiat: [], indexFiat: -1});
    const path = {
      code: directions[indexDirection].code,
    };
    getOrderGetFiats({user, path})
      .then((result) => this.setState({fiat: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getOrderGetFiats'))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {directions, fiat, indexDirection, indexFiat} = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на покупку" />}>
        <WrapCircle title="2" />

        <Text style={base.text1}>
          Каким способом вы хотите купить криптовалюту?
        </Text>
        <PickerLarge
          data={directions.map((e) => e.name)}
          index={indexDirection}
          placeholder="Как будете отправлять?"
          onSelect={this.onSelect1}
        />
        {indexDirection >= 0 && (
          <>
            <Text style={[base.text1, base.margin1]}>
              В какой валюте вы хотите отправить перевод?
            </Text>
            <PickerLarge
              data={fiat.map((e) => e.name)}
              index={indexFiat}
              placeholder="Выберите валюту"
              onSelect={this.onSelect2}
            />
          </>
        )}

        <View style={base.flex} />
        <Text style={base.text2}>
          Обязательно учитывайте возможность приема средств в выбраной валюте Не
          все банки по умолчанию принимают разную валюту, во многих для этого
          необходимо открыть соотвествующий тип счета
        </Text>
        <View style={base.flex} />
        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
