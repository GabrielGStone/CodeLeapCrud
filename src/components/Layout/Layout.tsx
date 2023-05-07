import { FC } from "react";
import { LayoutBox, Toast } from "./styles";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutBox>
      <Toast />
      {children}
    </LayoutBox>
  );
};

export default Layout;
