import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SignupBox from "../../components/SignupBox/SignupBox";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    false && navigate("/");
  }, [false]); // false = token
  return (
    <Layout>
      <SignupBox />
    </Layout>
  );
};

export default Signup;
