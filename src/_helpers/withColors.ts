import { Colors } from "@/_constants/colors.const";
import { ColorProps } from "@/_types/colors.types";

export const GetColorCode = (color: ColorProps) => {
    return Colors[color];
}