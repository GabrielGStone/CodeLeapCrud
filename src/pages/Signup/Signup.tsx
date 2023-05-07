import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SignupBox from "../../components/SignupBox/SignupBox";
import { useSelector } from "react-redux";
import { RootState } from "../../state";

const Signup = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  const navigate = useNavigate();

  useEffect(() => {
    token && navigate("/");
    //eslint-disable-next-line
  }, [token]);

  return (
    <Layout>
      <SignupBox />
    </Layout>
  );
};

export default Signup;
