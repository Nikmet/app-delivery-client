import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

export const Auth: FC = () => {
    const { navigate } = useTypedNavigation();

    return (
        <View className="pt-[20px]">
            <Text>Auth</Text>
            <Pressable onPress={() => navigate("Home")}>
                <Text className="text-2xl">Go to Home</Text>
            </Pressable>
        </View>
    );
};

export default Auth;
