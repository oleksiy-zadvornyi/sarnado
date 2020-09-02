import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// Components
import InputSelect from '../../Input/InputSelect';
import ButtonColor from '../../Button/ButtonColor';

// Helpers
import {_fetchError} from '../../../../helpers';

// Api
import {
  getSettingsGeoCountries,
  getSettingsGeoStates,
  getSettingsGeoCities,
} from '../../../../store/api/service';

// Style
import {base} from './styles';

const initState = {
  location: null,
  geocode: null,
  indexCountry: -1,
  indexState: -1,
  indexCity: -1,
  country: [],
  state: [],
  city: [],
};

export default class ModalEditCountry extends React.Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  componentDidMount() {
    this.fetchCountry();
  }

  onChangeCountry = (indexCountry) =>
    this.setState(
      {indexCountry, indexState: -1, indexCity: -1},
      this.fetchState,
    );
  onChangeState = (indexState) =>
    this.setState({indexState, indexCity: -1}, this.fetchCity);
  onChangeCity = (indexCity) => this.setState({indexCity});

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

  done = () => {
    const {
      user,
      fetchPatchSettingsGeoUpdate,
      onPressHide,
      showToast,
    } = this.props;
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

    let data = {
      country: country[indexCountry].code,
    };
    if (indexState >= 0) {
      data = {
        ...data,
        state: state[indexState].code,
      };
    }
    if (indexCity >= 0) {
      data = {
        ...data,
        city: city[indexCity].code,
      };
    }
    fetchPatchSettingsGeoUpdate({data, user});
    onPressHide();
    this.setState(initState);
  };

  render() {
    const {isVisible, onPressHide} = this.props;
    const {
      indexCountry,
      indexState,
      indexCity,
      country,
      state,
      city,
    } = this.state;
    return (
      <Modal
        style={base.center}
        isVisible={isVisible}
        onBackdropPress={onPressHide}
        onBackButtonPress={onPressHide}>
        <View style={base.wrap1}>
          <InputSelect
            style={base.input1}
            title="Страна"
            data={country}
            index={indexCountry}
            item="name"
            onChange={this.onChangeCountry}
          />
          {indexCountry !== -1 && (
            <InputSelect
              style={base.input1}
              title="Область"
              data={state}
              index={indexState}
              item="name"
              disabled={indexCountry === -1}
              onChange={this.onChangeState}
            />
          )}
          {indexState !== -1 && (
            <InputSelect
              style={base.input1}
              title="Город"
              data={city}
              index={indexCity}
              item="name"
              disabled={indexCountry === -1 && indexState === -1}
              onChange={this.onChangeCity}
            />
          )}

          <ButtonColor
            style={base.button1}
            title="Изменить"
            onPress={this.done}
          />
        </View>
      </Modal>
    );
  }
}
