import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Image from "react-native-scalable-image";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

// Components
import Wrap from "../../../../UI/Base/Wrap";
import PickerLarge from "../../../../UI/Picker/PickerLarge";

// Helpers
import * as Images from "../../../../../helpers/images";
import { navigate, goBack } from "../../../../../helpers/navigation";

// Style
import { base } from "./styles";

const DATA = ["Text1", "Text2", "Text3"];

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picker1: -1,
      picker2: -1,
    };
  }

  onPress = () => {
    // navigate("Step3");
  };

  onSelect1 = (e, i) => this.setState({ picker1: i });
  onSelect2 = (e, i) => this.setState({ picker2: i });

  render() {
    const { picker1, picker2 } = this.state;
    return (
      <Wrap>
        <View style={base.wrap1}>
          <View style={base.wrap3}>
            <TouchableOpacity style={base.wrap2}>
              <Image source={Images.left} height={wp(3)} />
              <View style={base.wrap3}>
                <Text style={base.text1}>Выйти</Text>
              </View>
            </TouchableOpacity>
            <View style={base.flex} />
            <Text style={base.text2}>Вы выставляеете ордер на продажу</Text>
          </View>
        </View>
        <View style={base.wrap4}>
          <View style={base.flex} />
          <Text style={base.text3}>2</Text>
          <View style={base.flex} />
        </View>

        <Text style={base.text4}>
          Каким способом вы хотите продать криптовалюту?
        </Text>
        <PickerLarge
          title={picker1 >= 0 ? DATA[picker1] : "Как будете получать?"}
          data={DATA}
          onSelect={this.onSelect1}
        />

        <Text style={[base.text4, base.margin1]}>
          В какой валюте вы хотите получить перевод?
        </Text>
        <PickerLarge
          title={picker2 >= 0 ? DATA[picker2] : "Выберите валюту"}
          data={DATA}
          onSelect={this.onSelect2}
        />

        <View style={base.flex} />
        <Text style={base.text6}>
          Обязательно учитывайте возможность приема средств в выбраной валюте Не
          все банки по умолчанию принимают разную валюту, во многих для этого
          необходимо открыть соотвествующий тип счета
        </Text>
        <View style={base.flex} />

        <View style={base.wrap5}>
          <TouchableOpacity style={base.wrap6} onPress={goBack}>
            <Text style={base.text5}>Предыдущий</Text>
          </TouchableOpacity>
          <View style={base.wrap8} />
          <TouchableOpacity style={base.wrap7} onPress={this.onPress}>
            <Text style={base.text5}>Далее</Text>
          </TouchableOpacity>
        </View>
      </Wrap>
    );
  }
}
