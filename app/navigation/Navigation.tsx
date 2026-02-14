import { FC } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { routes } from "./routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: "#fff"
                    }
                }}
            >
                {routes.map(r => (
                    <Stack.Screen key={r.name} {...r} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
