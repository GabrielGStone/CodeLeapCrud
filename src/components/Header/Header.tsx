import { Container, HeaderText, LogoutButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/actions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const Logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Container>
        <HeaderText onClick={handleNavigate}>todo list</HeaderText>
        <LogoutButton onClick={Logout}>Logout</LogoutButton>
      </Container>
    </>
  );
};

export default Header;
