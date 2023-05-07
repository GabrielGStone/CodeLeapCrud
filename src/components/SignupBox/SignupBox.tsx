import Button from "../Button/Button";
import { Container, SingupTitle } from "./styles";
import * as yup from "yup";
import { errorMessages } from "../ErrorMessages/error_messages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authActions } from "../../state/actions";
import { useDispatch } from "react-redux";
import TextInput from "../TextInput/TextInput";

const schema = yup
  .object({
    name: yup.string().trim().required(errorMessages.nameRequired),
  })
  .required();

const SignupBox = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: any) => {
    dispatch(authActions.login(data.name));
  };

  const disabled = watch("name");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SingupTitle>Welcome to CodeLeap network!</SingupTitle>
        <TextInput
          name="name"
          control={control}
          placeholder="John doe"
          error={errors.name}
        >
          Please enter your username
        </TextInput>

        <Button type="submit" disabled={!disabled}>
          ENTER
        </Button>
      </Container>
    </form>
  );
};

export default SignupBox;
