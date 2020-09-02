import React from 'react';
import {View, Text} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// Components
import Wrap from '../../../../UI/Base/Wrap';
import PickerLarge from '../../../../UI/Picker/PickerLarge';
import WrapExit from '../../../../UI/Wrap/WrapExit';
import WrapCircle from '../../../../UI/Wrap/WrapCircle';
import WrapStepButtons from '../../../../UI/Wrap/WrapStepButtons';

// Helpers
import {navigate} from '../../../../../helpers/navigation';
import {_fetchError} from '../../../../../helpers';

// Api
import {postOrderCheckCheckType} from '../../../../../store/api/orders';
import {
  getSettingsGeoCountries,
  getSettingsGeoStates,
  getSettingsGeoCities,
} from '../../../../../store/api/service';

// Style
import {base} from './styles';

export default class Sell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      geocode: null,
      indexCountry: -1,
      indexState: -1,
      indexCity: -1,
      country: [],
      state: [],
      city: [],
    };
  }

  componentDidMount() {
    this.fetchCountry();
  }

  onPressNext = () => {
    const {user, showToast, showNetworkIndicator} = this.props;
    const {
      indexCountry,
      indexState,
      indexCity,
      country,
      state,
      city,
    } = this.state;

    if (indexCountry === -1) {
      showToast('Выберите страну');
      return;
    }
    if (state.length > 0 && indexState === -1) {
      showToast('Выберите область');
      return;
    }
    if (city.length > 0 && indexCity === -1) {
      showToast('Выберите город');
      return;
    }

    const location = {
      country: country[indexCountry],
      state: indexState >= 0 ? state[indexState] : null,
      city: indexCity >= 0 ? city[indexCity] : null,
    };

    const data = {
      country: country[indexCountry].code,
      state: indexState >= 0 ? state[indexState].code : null,
      city: indexCity >= 0 ? city[indexCity].code : null,
    };
    showNetworkIndicator(true);
    postOrderCheckCheckType({user, data, checkedType: 'location'})
      .then(() => {
        const prevProps = {
          ...this.props.prevProps,
          location,
        };

        navigate('Step7', {prevProps});
      })
      .catch((e) => _fetchError(this.props, e, 'postOrderCheckCheckType'))
      .finally(() => showNetworkIndicator(false));
  };

  onChangeCountry = (e, indexCountry) =>
    this.setState(
      {indexCountry, indexState: -1, indexCity: -1},
      this.fetchState,
    );
  onChangeState = (e, indexState) =>
    this.setState({indexState, indexCity: -1}, this.fetchCity);
  onChangeCity = (e, indexCity) => this.setState({indexCity});

  getLocationAsync = async () => {
    const {showToast} = this.props;
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      showToast('В разрешении на доступ к местоположению было отказано');
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    const {latitude, longitude} = location.coords;
    this.getGeocodeAsync({latitude, longitude});
    this.setState({location: {latitude, longitude}});
  };

  getGeocodeAsync = async (location) => {
    const {country} = this.state;
    const geocode = await Location.reverseGeocodeAsync(location);
    if (geocode.length > 0) {
      const indexCountry = country.findIndex(
        (e) => e.isoCode === geocode[0].isoCountryCode,
      );
      await this.setState({geocode, indexCountry});
      this.fetchState();
    }
  };

  fetchCountry = async () => {
    const {user, showNetworkIndicator} = this.props;
    showNetworkIndicator(true);
    try {
      const result = await getSettingsGeoCountries({user});
      await this.setState({country: result.data});
      this.getLocationAsync();
    } catch (e) {
      _fetchError(this.props, e, 'getSettingsGeoCountries');
    } finally {
      showNetworkIndicator(false);
    }
  };

  fetchState = () => {
    const {user, showNetworkIndicator} = this.props;
    const {country, indexCountry} = this.state;
    const path = {
      country: country[indexCountry].code,
    };
    showNetworkIndicator(true);
    getSettingsGeoStates({user, path})
      .then((result) => {
        this.setState({state: result.data});
      })
      .catch((e) => _fetchError(this.props, e, 'getSettingsGeoStates'))
      .finally(() => showNetworkIndicator(false));
  };

  fetchCity = () => {
    const {user, showNetworkIndicator} = this.props;
    const {indexState, state} = this.state;
    const path = {
      state: state[indexState].code,
    };
    showNetworkIndicator(true);
    getSettingsGeoCities({user, path})
      .then((result) => {
        this.setState({city: result.data});
      })
      .catch((e) => _fetchError(this.props, e, 'getSettingsGeoCities'))
      .finally(() => showNetworkIndicator(false));
  };

  render() {
    const {
      country,
      indexCountry,
      state,
      indexState,
      city,
      indexCity,
    } = this.state;
    return (
      <Wrap titleView={<WrapExit title="Вы выставляете ордер на продажу" />}>
        <WrapCircle title="6" />

        <Text style={base.text1}>Выберите ваше местоположение</Text>
        <PickerLarge
          style={base.margin1}
          data={country.map((e) => e.name)}
          index={indexCountry}
          placeholder="Выбрать страну"
          onSelect={this.onChangeCountry}
        />
        {indexCountry !== -1 && state.length > 0 && (
          <PickerLarge
            style={base.margin1}
            data={state.map((e) => e.name)}
            index={indexState}
            placeholder="Выбрать область"
            onSelect={this.onChangeState}
          />
        )}
        {indexState !== -1 && city.length > 0 && (
          <PickerLarge
            style={base.margin1}
            data={city.map((e) => e.name)}
            index={indexCity}
            placeholder="Выбрать город"
            onSelect={this.onChangeCity}
          />
        )}

        <View style={base.flex} />
        <Text style={base.text2}>
          Есть те, кто ищет предложения для продажи в вашей стране, городе,
          регионе. Географическое местоположение, также, помогает системе
          определить подходящий тип предложения, валюту и платежную систему.
          {'\n'}
          {'\n'}
          Также, геолокация позволяет подготовить предложения по сделкам за
          наличный расчет.
        </Text>
        <View style={base.flex} />

        <WrapStepButtons onPressNext={this.onPressNext} />
      </Wrap>
    );
  }
}
