import { FC } from "react";
import { CustomButton } from "./styles";
interface ButtonProps {
  children: string;
  theme?: keyof typeof types;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
}
const types = {
  save: { background: "#47B960", borderColor: "#47B960" },
  cancel: { color: "#000", background: "#fff", borderColor: "#000" },
  delete: { background: "#FF5151", borderColor: "#FF5151" },
};

const Button: FC<ButtonProps> = ({
  children,
  theme,
  onClick,
  type,
  loading,
}) => {
  return theme ? (
    <CustomButton
      type={type}
      style={types[theme]}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "..." : children}
    </CustomButton>
  ) : (
    <CustomButton type={type} onClick={onClick} disabled={loading}>
      {loading ? "..." : children}
    </CustomButton>
  );
};

export default Button;
