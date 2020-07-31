import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Style
import {base} from './styles';

export default class Wrap extends React.Component {
  render() {
    const {children, titleView, noScroll, style} = this.props;

    if (noScroll) {
      return (
        <SafeAreaView style={base.safe}>
          <View style={[base.flex, base.backgroundColor, style]}>
            <View style={base.wrap}>
              {titleView}
              {children}
            </View>
          </View>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={base.safe}>
        <View style={[base.flex, base.backgroundColor, style]}>
          {titleView}
          <KeyboardAwareScrollView
            contentContainerStyle={base.flex}
            enableOnAndroid
            enableAutomaticScroll
            alwaysBounceVertical={false}
            bounces={false}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <ScrollView
              contentContainerStyle={base.wrap2}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              bounces={false}>
              <View style={base.wrap2}>{children}</View>
            </ScrollView>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
