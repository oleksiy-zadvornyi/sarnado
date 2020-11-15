import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import ButtonCoin from '../../../../UI/Button/ButtonCoin';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';
import * as Images from '../../../../../helpers/images';
import {_fetchError} from '../../../../../helpers';

// Api
import {getCurrencyGetCrypto} from '../../../../../store/api/service';
import {postOrderCheckCheckType} from '../../../../../store/api/orders';

// Style
import {base} from './styles';

export default class Buy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: -1,
      crypto: [],
    };
  }

  componentDidMount() {
    const {user, showNetworkIndicator} = this.props;
    showNetworkIndicator(true);
    getCurrencyGetCrypto({user})
      .then((result) => this.setState({crypto: result.data}))
      .catch((e) => _fetchError(this.props, e, 'getCurrencyGetCrypto'))
      .finally(() => showNetworkIndicator(false));
  }

  onPressNext = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {index, crypto} = this.state;
    if (index === -1) {
      showToast('Выберите криптовалюту');
      return;
    }

    const data = {
      crypto: crypto[index].id,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'crypto'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          crypto: crypto[index],
        };
        navigate('Step2', {prevProps});
      })
      .catch((e) => _fetchError(this.props, e, 'postOrderCheckCheckType'))
      .finally(() => showNetworkIndicator(false));
  };

  onPressButton = (index) => this.setState({index});

  getIcon = (item) => {
    switch (item.name) {
      case 'ETH': {
        return Images.eth;
      }
      case 'ISA': {
        return Images.isa;
      }
      case 'USDT':
      case 'USDT.ERC20': {
        return Images.usdt;
      }
      case 'XRP': {
        return Images.xrp;
      }
      case 'BTC': {
        return Images.btc;
      }
    }
  };

  render() {
    const {index, crypto} = this.state;

    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на покупку" />}>
        <WrapCircle title="1" />

        <Text style={base.text1}>
          Выберите криптовалюту, которую хотели вы бы хотели купить
        </Text>

        {crypto.map((e, i) => (
          <ButtonCoin
            key={i}
            styleTouchable={base.margin1}
            select={index === i}
            index={i}
            currency={e.name}
            title={e.full_name}
            icon={this.getIcon(e)}
            noTintColor={e.name === 'ISA'}
            onPress={this.onPressButton}
          />
        ))}

        <View style={base.flex} />

        <WrapStepButtons disabledBack onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
