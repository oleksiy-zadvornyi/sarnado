import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Image from "react-native-scalable-image";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

// Components
import Wrap from "../../../../UI/Base/Wrap";
import ButtonCoin from "../../../../UI/Button/ButtonCoin";
// import ModalExit from "../../../../UI/Modal/ModalExit";

// Helpers
import * as Images from "../../../../../helpers/images";
import { navigate } from "../../../../../helpers/navigation";

// Style
import { base } from "./styles";

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isVisible: true,
    };
  }

  onPress = () => {
    navigate("Step2");
  };

  onPressHide = () => this.setState({ isVisible: false });
  onPressShow = () => this.setState({ isVisible: true });

  onPressBitcoin = () => this.setState({ index: 1 });
  onPressEtherium = () => this.setState({ index: 2 });
  onPressRipple = () => this.setState({ index: 3 });
  onPressTetherOmni = () => this.setState({ index: 4 });
  onPressTetherErc20 = () => this.setState({ index: 5 });
  onPressSarnado = () => this.setState({ index: 6 });

  render() {
    const { index, isVisible } = this.state;

    return (
      <Wrap>
        <View style={base.wrap1}>
          <View style={base.wrap3}>
            <TouchableOpacity style={base.wrap2} onPress={this.onPressShow}>
              <Image source={Images.left} height={wp(3)} />
              <View style={base.wrap3}>
                <Text style={base.text1}>Выйти</Text>
              </View>
            </TouchableOpacity>
            <View style={base.flex} />
            <Text style={base.text2}>Вы выставляеете ордер на продажу</Text>
          </View>
        </View>

        {/* <ModalExit onPressHide={this.onPressHide} /> */}

        <View style={base.wrap4}>
          <View style={base.flex} />
          <Text style={base.text3}>1</Text>
          <View style={base.flex} />
        </View>
        <Text style={base.text4}>
          Выберите криптовалюту, которую хотели вы бы хотели продать
        </Text>
        <ButtonCoin
          styleTouchable={base.margin1}
          select={index === 1}
          currency="ВТС"
          title="BITCOIN"
          icon={Images.btc}
          onPress={this.onPressBitcoin}
        />
        <ButtonCoin
          styleTouchable={base.margin1}
          select={index === 2}
          currency="ETH"
          title="ETHERIUM"
          icon={Images.eth}
          onPress={this.onPressEtherium}
        />
        <ButtonCoin
          styleTouchable={base.margin1}
          select={index === 3}
          currency="XRP"
          title="RIPPLE"
          icon={Images.xrp}
          onPress={this.onPressRipple}
        />
        <ButtonCoin
          styleTouchable={base.margin1}
          select={index === 4}
          currency="USDT"
          title="TETHER OMNI"
          icon={Images.usdt}
          onPress={this.onPressTetherOmni}
        />
        <ButtonCoin
          styleTouchable={base.margin1}
          select={index === 5}
          currency="USDT"
          title="TETHER OMNI"
          icon={Images.usdt}
          onPress={this.onPressTetherErc20}
        />
        <ButtonCoin
          styleTouchable={base.margin1}
          select={index === 6}
          currency="ISA"
          title="SARNADO"
          noTintColor
          icon={Images.isa}
          onPress={this.onPressSarnado}
        />
        <View style={base.flex} />
        <View style={base.wrap5}>
          <TouchableOpacity disabled style={base.wrap6}>
            <Text style={base.text5}>Предыдущий</Text>
          </TouchableOpacity>
          <View style={base.wrap8} />
          <TouchableOpacity style={base.wrap7} onPress={this.onPress}>
            <Text style={base.text6}>Далее</Text>
          </TouchableOpacity>
        </View>
      </Wrap>
    );
  }
}
