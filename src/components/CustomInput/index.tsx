import { FC } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  onChange: (value: string) => void;
  placeholder: string;
};

export const CustomInput: FC<Props> = ({ onChange, placeholder }) => {
  return (
    <Input
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
