import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    false && navigate("/");
  }, [false]); // false = token
  return <></>;
};

export default Signup;
