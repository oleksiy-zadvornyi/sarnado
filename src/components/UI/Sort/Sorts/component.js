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
    };
  }

  onSelectCountry = (e, indexCountry) =>
    this.setState({indexCountry}, this.onChange);
  onSelectDirection = (e, indexDirection) =>
    this.setState({indexDirection}, this.onChange);
  onSelectCrypto = (e, indexCrypto) =>
    this.setState({indexCrypto}, this.onChange);

  onChange = () => {
    const {onChange} = this.props;
    onChange(this.state);
  };

  render() {
    const {crypto, directions, countries} = this.props;
    const {indexCountry, indexDirection, indexCrypto} = this.state;

    return (
      <View style={base.wrap1}>
        <PickerSmall
          title={indexCountry >= 0 ? countries[indexCountry].name : 'Страна'}
          data={countries.map((e) => e.name)}
          onSelect={this.onSelectCountry}
        />
        <PickerSmall
          title={
            indexDirection >= 0
              ? directions[indexDirection].name
              : 'Направления сделки'
          }
          data={directions.map((e) => e.name)}
          onSelect={this.onSelectDirection}
        />
        <PickerSmall
          title={indexCrypto >= 0 ? crypto[indexCrypto].name : 'Валюта'}
          data={crypto.map((e) => e.name)}
          onSelect={this.onSelectCrypto}
        />
      </View>
    );
  }
}
