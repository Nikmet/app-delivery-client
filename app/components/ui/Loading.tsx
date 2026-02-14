import { FC } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export const Loading: FC = () => {
    return <ActivityIndicator size="large" color="#47AA52" />;
};

export default Loading;
