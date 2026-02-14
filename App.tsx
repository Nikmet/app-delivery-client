import "./global.css";
import Navigation from "@/navigation/Navigation";
import AuthProvider from "@/providers/auth/auth-provider";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <>
            <AuthProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </AuthProvider>
            <StatusBar style="light" />
        </>
    );
}
