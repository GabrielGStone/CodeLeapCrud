import usePosts from "../../actions/usePosts";
import Button from "../Button/Button";
import Modal from "../Modal";
import { Text, ButtonContainer } from "./styles";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface DeleteModalProps {
  setDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
  deleteModalOpen: boolean;
  id: number;
}

const DeleteModal: FC<DeleteModalProps> = ({
  setDeleteModalOpen,
  deleteModalOpen,
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const { deletePosts } = usePosts();

  const deletePost = async () => {
    setLoading(true);
    const res = await deletePosts(id);
    console.log(res);
    setDeleteModalOpen(false);
    setLoading(false);
  };

  return (
    <Modal
      loading={loading}
      active={deleteModalOpen}
      hideModal={() => setDeleteModalOpen(false)}
    >
      <Text>Are you sure you want to delete this item?</Text>
      <ButtonContainer>
        <Button theme="cancel" onClick={() => setDeleteModalOpen(false)}>
          Cancel
        </Button>
        <Button theme="delete" onClick={deletePost} loading={loading}>
          Delete
        </Button>
      </ButtonContainer>
    </Modal>
  );
};

export default DeleteModal;
