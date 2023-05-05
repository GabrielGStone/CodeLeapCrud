import { FC } from "react";
import { Input, TextContainer, TitleText } from "./styles";
import { Controller, FieldError } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface TextInputProps {
  children: string;
  type?: string;
  placeholder?: string;
  control: any;
  name: string;
  error?: FieldError;
}
const TextInput: FC<TextInputProps> = ({
  children,
  type,
  placeholder,
  control,
  name,
  error,
}) => {
  console.log("component test", error);

  return (
    <TextContainer>
      <TitleText>{children}</TitleText>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Input type={type} placeholder={placeholder} {...field} />

            {error && <ErrorMessage text={error.message} />}
          </>
        )}
      />
    </TextContainer>
  );
};

export default TextInput;
