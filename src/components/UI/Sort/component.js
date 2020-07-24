import React from "react";
import { View } from "react-native";

// Components
import PickerSmall from "../Picker/PickerSmall";

// Style
import { base } from "./styles";

const COUNTRY = ["Страна", "Страна", "Страна"];
const RATING = ["Рейтинг продавца", "Рейтинг продавца", "Рейтинг продавца"];
const CURRENCY = ["Валюта", "Валюта", "Валюта"];

export default class Sort extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <View style={base.wrap1}>
        <PickerSmall title="Страна" data={COUNTRY} />
        <View style={base.flex} />
        <PickerSmall title="Рейтинг продавца" data={RATING} />
        <View style={base.flex} />
        <PickerSmall title="Валюта" data={CURRENCY} />
      </View>
    );
  }
}
