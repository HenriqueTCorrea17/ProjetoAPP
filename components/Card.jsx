import {Image, TouchableOpacity, View, StyleSheet, Text} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function Card ({ ativo = false, texto = "", fnConcluir = null, fnExcluir = null }) {

    let styles = stylesAtivo

    if (ativo) {
        styles = stylesConcluido
    }


    return (
        <View style={[styles.container]}>

            <TouchableOpacity onPress={fnConcluir} style={styles.circulo}>

                {ativo && <Image style={styles.icon} source={require('../assets/check.png')} />}

            </TouchableOpacity>

            <Text style={styles.text}>{texto}</Text>

            <TouchableOpacity onPress={fnExcluir}>
                <Image style={styles.lixeira} source={require('../assets/lixo.png')}/>
            </TouchableOpacity>

        </View>
    )
}

const stylesAtivo = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: sizes.margin_horizontal,
        padding: sizes.padding_medium,
        gap: 10,
        backgroundColor: colors.gray_100,
        borderRadius: sizes.borderRadius,
        borderColor: colors.gray_330,
        borderWidth: 1,
        marginVertical: sizes.padding_medium,
    },

    circulo: {
        width: 20,
        height: 20,
        borderColor: colors.purple_base,
        borderWidth: 2,
        borderRadius: sizes.border_circle,
    },

    text: {
        color: colors.gray_600,
        fontSize: sizes.size_medium,
        width: '80%',
    },

    lixeira: {
        width: 30,
        height: 50,
        resizeMode: "contain",
    }
})



const stylesConcluido = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: sizes.margin_horizontal,
        padding: sizes.padding_medium,
        gap: 10,
        backgroundColor: colors.white,
        borderRadius: sizes.borderRadius,
        borderColor: colors.gray_330,
        borderWidth: 1,
        marginVertical: sizes.padding_medium,
    },

    circulo: {
        width: 20,
        height: 20,
        borderColor: colors.green_base,
        borderWidth: 2,
        borderRadius: sizes.border_circle,
        backgroundColor: colors.green_base,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: colors.gray_600,
        fontSize: sizes.size_medium,
        width: '80%',
        textDecorationLine: "line-through",
    },

    lixeira: {
        width: 30,
        height: 50,
        resizeMode: "contain",
    },

    icon: {
        width: 18,
        height: 18,
    }
})
