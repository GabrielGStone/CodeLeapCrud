import { FC } from "react";
import { Input, TextArea, TextContainer, TitleText } from "./styles";
import { Controller, FieldError } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface TextInputProps {
  children: string;
  type?: string;
  placeholder?: string;
  control: any;
  name: string;
  error?: FieldError;
  isContent?: boolean;
}
const TextInput: FC<TextInputProps> = ({
  children,
  type,
  placeholder,
  control,
  name,
  error,
  isContent,
}) => {
  return (
    <TextContainer>
      <TitleText>{children}</TitleText>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {isContent ? (
              <TextArea placeholder={placeholder} {...field} />
            ) : (
              <Input
                style={{ height: isContent ? "" : "" }}
                type={type}
                placeholder={placeholder}
                {...field}
              />
            )}
            {error && <ErrorMessage text={error.message} />}
          </>
        )}
      />
    </TextContainer>
  );
};

export default TextInput;
