import React from "react";
import { View } from "react-native";

// Components
import Picker from "../Picker";

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
        <Picker title="Страна" data={COUNTRY} />
        <View style={base.flex} />
        <Picker title="Рейтинг продавца" data={RATING} />
        <View style={base.flex} />
        <Picker title="Валюта" data={CURRENCY} />
      </View>
    );
  }
}
