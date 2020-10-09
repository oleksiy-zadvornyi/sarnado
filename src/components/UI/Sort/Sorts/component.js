import React from 'react';
import {View} from 'react-native';

// Components
import PickerSmall from '../../Picker/PickerSmall';

// Style
import {base} from './styles';

export default class Sorts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexCountry: -1,
      indexDirection: -1,
      indexCrypto: -1,
      indexFiat: -1,
    };
  }

  onSelectCountry = (e, indexCountry) =>
    this.setState({indexCountry}, this.onChange);
  onSelectDirection = (e, indexDirection) =>
    this.setState({indexDirection}, this.onChange);
  onSelectCrypto = (e, indexCrypto) =>
    this.setState({indexCrypto}, this.onChange);
  onSelectFiat = (e, indexFiat) => this.setState({indexFiat}, this.onChange);

  onChange = () => {
    const {onChange} = this.props;
    onChange(this.state);
  };

  render() {
    const {crypto, directions, countries, fiat} = this.props;
    const {indexCountry, indexDirection, indexCrypto, indexFiat} = this.state;

    return (
      <View style={base.wrap1}>
        {countries && (
          <PickerSmall
            title={indexCountry >= 0 ? countries[indexCountry].name : 'Страна'}
            data={countries.map((e) => e.name)}
            onSelect={this.onSelectCountry}
          />
        )}
        {crypto && (
          <PickerSmall
            title={indexCrypto >= 0 ? crypto[indexCrypto].name : 'Криптовалюта'}
            data={crypto.map((e) => e.name)}
            onSelect={this.onSelectCrypto}
          />
        )}
        {fiat && (
          <PickerSmall
            title={indexFiat >= 0 ? fiat[indexFiat].name : 'Фиатна'}
            data={fiat.map((e) => e.name)}
            onSelect={this.onSelectFiat}
          />
        )}
        {directions && (
          <PickerSmall
            title={
              indexDirection >= 0
                ? directions[indexDirection].name
                : 'Направление'
            }
            data={directions.map((e) => e.name)}
            onSelect={this.onSelectDirection}
          />
        )}
      </View>
    );
  }
}
