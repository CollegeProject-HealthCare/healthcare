import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Colors, setHeight, setWidth } from './Theme';

export interface HeaderData {
    text: string;
    fontSize?: number;
    textColor?: string;
    bodyColor?: string;
  }

function Header({text, fontSize, textColor, bodyColor}: HeaderData) {

    const style = StyleSheet.create({
        container: {
        width: setWidth(100), 
        height: setHeight(6),
        backgroundColor: bodyColor ? bodyColor : Colors.DEFAULT_WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        },
    
        textStyle: {
        fontSize: fontSize ? setWidth(fontSize) : setWidth(7),
        fontWeight: 'bold',
        fontFamily: 'Abril Fatface',
        color: textColor ? textColor : Colors.SECONDARY_GREEN,
        }
    })
    
    return (
        <View style={ style.container }>
            <Text style={ style.textStyle }>{text}</Text>
        </View>
    )
}


export default Header;