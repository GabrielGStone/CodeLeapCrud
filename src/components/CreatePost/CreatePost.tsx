import { useSelector } from "react-redux";
import { Container, Title } from "./styles";
import { RootState, postActions } from "../../state";
import TextInput from "../TextInput";
import * as yup from "yup";
import { errorMessages } from "../ErrorMessages/error_messages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";

const schema = yup
  .object({
    title: yup.string().trim().required(errorMessages.titleRequired),
    content: yup.string().trim().required(errorMessages.contentRequired),
  })
  .required();
const CreatePost = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (data: any) => {
    dispatch(postActions.setPost(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Title>What's on your mind, {token}?</Title>
        <TextInput
          type=""
          placeholder="Hello world"
          control={control}
          name="title"
          error={errors.title}
        >
          Title
        </TextInput>
        <TextInput
          type=""
          placeholder="content here."
          control={control}
          name="details"
          error={errors.content}
          isContent
        >
          Content
        </TextInput>
        <Button type="submit">Create</Button>
      </Container>
    </form>
  );
};

export default CreatePost;
