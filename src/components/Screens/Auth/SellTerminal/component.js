import React from "react";
import { View, Text, FlatList } from "react-native";

// Components
import Wrap from "../../../UI/Base/Wrap";
import ItemSellTerminal from "../../../UI/Item/ItemSellTerminal";
import ButtonColor from "../../../UI/Button/ButtonColor";
import Sort from "../../../UI/Sort";

// Style
import { base } from "./styles";

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

export default class SellTerminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({ item, index }) => <ItemSellTerminal key={index} {...item} />;

  render() {
    return (
      <Wrap noScroll>
        <View style={base.wrap1}>
          <Text style={base.text1}>
            Здесь вы можете продать криптовалюту{"\n"}
            или выставить свой ордер на покупку
          </Text>
        </View>
        <Sort />

        <FlatList
          data={DATA}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <ButtonColor style={base.button1} title="Выставить ордер на покупку" />
      </Wrap>
    );
  }
}
