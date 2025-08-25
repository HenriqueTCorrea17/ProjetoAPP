import {Image, View, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App (){
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen option={{headerShown: false}} name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}