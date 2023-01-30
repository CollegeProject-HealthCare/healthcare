import React, { useCallback } from 'react';
import { View, TextInput, Image } from 'react-native';
import { KeyboardTypeOptions, ViewStyle, FlexStyle, ColorValue, ImageStyle } from 'react-native'; //Types
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Colors, setHeight, setWidth } from './Theme';

interface InputData {
  placeholder?: string | undefined;
  rightImage?: any;
  leftImage?: any;
  rightImageStyle?: ImageStyle;
  leftImageStyle?: ImageStyle;
  height: number;
  width: number;
  alignSelf?: FlexStyle['alignSelf'];
  borderRadius?: ViewStyle['borderRadius'];
  color: ViewStyle['backgroundColor'];
  placeholderColor?: ColorValue | undefined;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  textSize?: number;
  borderColor?: ColorValue | undefined;
  value?: string;
  autoCorrect?: boolean;
  onChangeInput?: any;
  maxlength?: number;
  hidePass?: any;
  setHidePass?: any;
  editable?: boolean;
  backgroundColor?: string;
}

function Input({
  placeholder,
  rightImage,
  leftImage,
  rightImageStyle,
  leftImageStyle,
  height = setHeight(8.2),
  width = setWidth(90),
  alignSelf = 'center',
  borderRadius = setWidth(2),
  color = Colors.black,
  placeholderColor = Colors.DEFAULT_GREY,
  secureTextEntry = false,
  keyboardType = 'default',
  textSize = setWidth(4),
  borderColor = Colors.LIGHT_GREEN,
  value,
  autoCorrect,
  onChangeInput,
  maxlength,
  hidePass,
  setHidePass,
  editable,
  backgroundColor,
}: InputData) {
  const showHidePass = (val: boolean) => {
    setHidePass(!val);
  };

  const onChangeText = useCallback((data: string) => {
    onChangeInput(data);
  }, []); // No dependencies

  const _keyboardType = keyboardType;
  return (
    <View
      style={{
        backgroundColor: backgroundColor ?? Colors.white,
        height: height,
        width: width,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: borderRadius,
        alignSelf: alignSelf,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {leftImage ? (
        <Image
          source={leftImage}
          style={[
            {
              height: setWidth(7.5),
              width: setWidth(6),
              marginLeft: setWidth(5),
            },
            leftImageStyle,
          ]}
        />
      ) : null}

      <TextInput
        placeholder={placeholder ? placeholder : 'placeholder'}
        style={{
          fontSize: textSize,
          flex: 1,
          marginHorizontal: setWidth(3),
          paddingHorizontal: setWidth(2),
          color: color,
        }}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
        keyboardType={_keyboardType}
        autoCorrect={autoCorrect ? autoCorrect : true}
        value={value}
        maxLength={maxlength}
        onChangeText={onChangeText}
        editable={editable ? true : editable}
      />
      {rightImage ? (
        <TouchableOpacity
          style={{
            height: setHeight(6),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => showHidePass(hidePass)}>
          <Image
            source={rightImage}
            style={[
              {
                height: setWidth(5),
                width: setWidth(7),
                marginRight: setWidth(5),
                // tintColor: Colors.white,
              },
              rightImageStyle,
            ]}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default React.memo(Input);
