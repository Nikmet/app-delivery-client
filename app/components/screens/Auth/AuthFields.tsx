import Field from "@/components/ui/field/field";
import { IAuthFormData } from "@/types/auth.interface";
import { FC } from "react";
import { Control } from "react-hook-form";
import { Text, View } from "react-native";
import { validEmail } from "./email.regex";

interface IAuthFields {
    control: Control<IAuthFormData>;
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
    return (
        <>
            <Field<IAuthFormData>
                placeholder="Введите email"
                control={control}
                name="email"
                rules={{
                    required: "Email обязателен",
                    pattern: {
                        value: validEmail,
                        message: "Пожалуйста, введите корректный email"
                    }
                }}
                keyboardType="email-address"
            />
            <Field<IAuthFormData>
                placeholder="Введите пароль"
                control={control}
                name="password"
                secureTextEntry={true}
                rules={{
                    required: "Пароль обязателен",
                    minLength: {
                        value: 6,
                        message: "Пароль должен содержать не менее 6 символов"
                    }
                }}
                keyboardType="visible-password"
            />
        </>
    );
};

export default AuthFields;
