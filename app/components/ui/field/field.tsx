import { JSX } from "react";
import { Text, TextInput, View } from "react-native";
import { IFieldProps } from "./field.interface";
import { Controller } from "react-hook-form";
import clsx from "clsx";

const Field = <T extends Record<string, any>>({
    control,
    name,
    rules,
    className,
    ...props
}: IFieldProps<T>): JSX.Element => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <>
                    <View
                        className={clsx(
                            "bg-white w-full  border rounded-lg pb-4 pt-2.5 px-4 my-1",
                            error ? "border-red-500" : "border-gray-400"
                        )}
                    >
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={(value || "").toString()}
                            className="text-black text-base"
                            placeholderTextColor="#6a6a6a"
                            {...props}
                        />
                    </View>
                    {error && <Text className="text-red-500">{error.message}</Text>}
                </>
            )}
        />
    );
};

export default Field;
