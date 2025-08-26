import {Image, View, StyleSheet} from "react-native";
import colors from "../design/colors";

export default function Header(){
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require('../assets/logo.png')} />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray_330
    },

    logo: {
      height: 180,
        width: 180,
      resizeMode: "contain",
    },
})