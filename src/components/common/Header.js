import React from "react";
import { Text, View } from "react-native";

//Creation
const Header = props => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

//Defining the Styles
const styles = {
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContents: "center",
        alignItems: "center",
        height: 50,
        paddingTop: 15,
        position: "relative"
    },
        textStyle: {
        fontSize: 20,
        backgroundColor: "white"
    }
};

export { Header };