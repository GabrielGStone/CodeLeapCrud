import { Container, HeaderText, LogoutButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../state/actions";

const Header = () => {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Container>
        <HeaderText>CodeLeap Network</HeaderText>
        <LogoutButton onClick={Logout}>Logout</LogoutButton>
      </Container>
    </>
  );
};

export default Header;
