import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { Container, Input, InputTitle, SingupTitle } from "./styles";
import * as yup from "yup";
import { errorMessages } from "../ErrorMessages/error_messages";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authActions } from "../../state/actions";

const schema = yup
  .object({
    name: yup.string().trim().required(errorMessages.nameRequired),
  })
  .required();

const SignupBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    dispatch(authActions.login(data));
    navigate("/todo-list");
    reset();
  };

  return (
    <Container>
      <SingupTitle>Welcome to CodeLeap network!</SingupTitle>
      <InputTitle>Please enter your username</InputTitle>
      <Input placeholder="John doe" />

      <Button theme="save" type="submit" onClick={navigate("/")}>
        ENTER
      </Button>
    </Container>
  );
};

export default SignupBox;
