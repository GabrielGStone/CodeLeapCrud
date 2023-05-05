import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { useDispatch } from "react-redux";
import { authActions } from "../../state/actions";

const MainScreen = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    !token && navigate("/signup");
  }, [token]);

  const Logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Layout>
      <div>{token}</div>
      <button onClick={Logout}>logout</button>
    </Layout>
  );
};

export default MainScreen;
