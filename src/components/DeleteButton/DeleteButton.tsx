import { Button } from "./styles";
import trash from "../../assets/delete.svg";
import { Dispatch, FC, SetStateAction } from "react";

interface DeleteModalProps {
  setDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
}

const DeleteButton: FC<DeleteModalProps> = ({ setDeleteModalOpen }) => {
  return <Button onClick={() => setDeleteModalOpen(true)} src={trash} />;
};

export default DeleteButton;
