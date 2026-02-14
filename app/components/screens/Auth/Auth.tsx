import Button from "@/components/ui/button/Button";
import Loading from "@/components/ui/Loading";
import { IAuthFormData } from "@/types/auth.interface";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import AuthFields from "./AuthFields";

export const Auth: FC = () => {
    const [isReg, setIsReg] = useState<boolean>(false);

    const { handleSubmit, reset, control } = useForm<IAuthFormData>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<IAuthFormData> = data => {};

    const isLoading = false;

    return (
        <View className="mx-2 items-center justify-center h-full">
            <View className="w-9/12">
                <Text className="text-center text-black text-3xl font-medium mb-8">
                    {isReg ? "Регистрация" : "Вход"}
                </Text>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <AuthFields control={control} />
                        <Button onPress={handleSubmit(onSubmit)}>{isReg ? "Зарегистрироваться" : "Войти"}</Button>
                        <Pressable
                            onPress={() => {
                                reset();
                                setIsReg(!isReg);
                            }}
                        >
                            <Text className="text-black text-center text-base mt-6">
                                {isReg ? "Уже есть аккаунт? " : "Еще нет аккаунта? "}
                                <Text className="text-[#47AA52]">{isReg ? "Создать аккаунт" : "Войти"}</Text>
                            </Text>
                        </Pressable>
                    </>
                )}
            </View>
        </View>
    );
};

export default Auth;
