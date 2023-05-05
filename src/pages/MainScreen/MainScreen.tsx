import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const MainScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    false && navigate("/signup");
  }, [false]); // false = token
  return <Layout>a</Layout>;
};

export default MainScreen;
