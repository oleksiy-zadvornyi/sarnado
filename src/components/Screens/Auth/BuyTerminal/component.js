import React from "react";
import { View, Text, FlatList } from "react-native";
import Image from "react-native-scalable-image";

// Components
import Wrap from "../../../UI/Base/Wrap";
import ItemBuyTerminal from "../../../UI/Item/ItemBuyTerminal";
import ButtonColor from "../../../UI/Button/ButtonColor";
import Sort from "../../../UI/Sort";

// Helpers
import * as Images from "../../../../helpers/images";

// Style
import { base } from "./styles";
import { navigate } from "../../../../helpers/navigation";

const DATA = [
  {
    isOnline: true,
    isVerify: true,
    name: "Bitservice",
    icon: null,
    rating: 4,
    country: "Россия",
    method: "Сбербанк (Российский рубль)",
    size: 0.02060073,
    limit: {
      min: 10000,
      max: 13789,
    },
    course: 677011.82,
    currency: "RUB",
  },
  {
    isOnline: true,
    isVerify: true,
    name: "Bitservice",
    icon: null,
    rating: 4,
    country: "Россия",
    method: "Сбербанк (Российский рубль)",
    size: 0.02060073,
    limit: {
      min: 10000,
      max: 13789,
    },
    course: 677011.82,
    currency: "RUB",
  },
  {
    isOnline: true,
    isVerify: true,
    name: "Bitservice",
    icon: null,
    rating: 4,
    country: "Россия",
    method: "Сбербанк (Российский рубль)",
    size: 0.02060073,
    limit: {
      min: 10000,
      max: 13789,
    },
    course: 677011.82,
    currency: "RUB",
  },
];

export default class BuyTerminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPress = () => {
    navigate("Step1");
  };

  renderItem = ({ item, index }) => <ItemBuyTerminal key={index} {...item} />;

  render() {
    const { country } = this.state;
    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>
            Здесь вы можете купить криптовалюту{"\n"}или выставить свой ордер на
            продажу
          </Text>
        </View>
        <Sort />

        <FlatList
          data={DATA}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <ButtonColor
          style={base.button1}
          title="Выставить ордер на продажу"
          onPress={this.onPress}
        />
      </Wrap>
    );
  }
}
