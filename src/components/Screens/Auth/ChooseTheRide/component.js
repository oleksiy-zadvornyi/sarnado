import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Image from "react-native-scalable-image";

// Components
import Wrap from "../../../UI/Base/Wrap";
import InputText from "../../../UI/Input/InputText";
import ButtonColor from "../../../UI/Button/ButtonColor";

// Helpers
import * as Images from "../../../../helpers/images";

// Style
import { base } from "./styles";
import { navigate } from "../../../../helpers/navigation";

export default class ChooseTheRide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressBuyTerminal = () => {
    navigate("BuyTerminal");
  };

  onPressSellTerminal = () => {
    navigate("SellTerminal");
  };

  render() {
    return (
      <Wrap noScroll>
        <View style={base.flex} />
        <Image source={Images.logo} height={40} />
        <View style={base.flex} />
        <Text style={[base.text1, base.margin2]}>
          Вы можете выбрать варианты для работы с системой. Если требуется
          быстрая сделка, то выберите вариант работы с готовыми ордерами.
        </Text>
        <ButtonColor
          style={base.button1}
          styleTouchable={base.margin1}
          title="Быстро купить криптовалюту"
          onPress={this.onPressBuyTerminal}
        />
        <ButtonColor
          style={base.button2}
          title="Быстро продать криптовалюту"
          onPress={this.onPressSellTerminal}
        />
        <View style={base.flex} />
        <Text style={[base.text1, base.margin2]}>
          Если вы хотите выставить свою цену на покупку или продажу, то
          разместите свой ордер
        </Text>
        <ButtonColor
          style={base.button2}
          styleTouchable={base.margin1}
          title="Выставить ордер на продажу"
        />
        <ButtonColor style={base.button1} title="Выставить ордер на покупку" />
        <View style={base.flex} />
      </Wrap>
    );
  }
}
