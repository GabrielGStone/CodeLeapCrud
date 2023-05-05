import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const MainScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    true && navigate("/signup");
  }, [true]); // false = token
  return <Layout>a</Layout>;
};

export default MainScreen;
