import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Pressable, PressableProps, Text } from "react-native";

export interface IButtonProps extends PressableProps {
    className?: string;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, className, ...props }) => {
    return (
        <Pressable
            className={clsx("self-center mt-3.5 bg-[#47AA52] w-full py-3 font-light rounded-lg", className)}
            {...props}
        >
            <Text className="text-white text-center font-medium text-lg">{children}</Text>
        </Pressable>
    );
};

export default Button;
