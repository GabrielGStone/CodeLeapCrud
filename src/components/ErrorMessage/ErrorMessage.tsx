import { FC } from "react";
import { ErrorWrap, Text } from "./styles";

interface Props {
  text?: any;
}

const ErrorMessage: FC<Props> = ({ text }) => {
  return (
    <ErrorWrap>
      <Text>{text}</Text>
    </ErrorWrap>
  );
};

export default ErrorMessage;
