import { Dispatch, FC, SetStateAction, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { Text, ButtonContainer } from "./styles";
import TextInput from "../TextInput/TextInput";
import * as yup from "yup";
import { errorMessages } from "../ErrorMessages/error_messages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import usePosts from "../../actions/usePosts";

interface EditModalProps {
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
  editModalOpen: boolean;
  id: number;
  title: string;
  content: string;
}
const schema = yup
  .object({
    title: yup.string().trim().required(errorMessages.titleRequired),
    content: yup.string().trim().required(errorMessages.contentRequired),
  })
  .required();

const EditModal: FC<EditModalProps> = ({
  setEditModalOpen,
  editModalOpen,
  id,
  title,
  content,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: title,
      content: content,
    },
  });

  const [loading, setLoading] = useState(false);
  const { patchPosts } = usePosts();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const res = await patchPosts(id, data.title, data.content);
    console.log(res);
    setLoading(false);
    setEditModalOpen(false);
  };

  return (
    <Modal
      loading={loading}
      active={editModalOpen}
      hideModal={() => setEditModalOpen(false)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text>Edit</Text>
        <TextInput
          name="title"
          control={control}
          error={errors.title}
          placeholder="Hello World"
        >
          Title
        </TextInput>
        <TextInput
          name="content"
          control={control}
          error={errors.content}
          placeholder="Content here"
        >
          Content
        </TextInput>

        <ButtonContainer>
          <Button
            theme="cancel"
            type="button"
            onClick={() => setEditModalOpen(false)}
          >
            Cancel
          </Button>
          <Button theme="save" type="submit">
            Save
          </Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
};

export default EditModal;
