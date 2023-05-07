import { Button } from "./styles";
import edit from "../../assets/edit.svg";
import { Dispatch, FC, SetStateAction } from "react";

interface EditModalProps {
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
}

const EditButton: FC<EditModalProps> = ({ setEditModalOpen }) => {
  return <Button onClick={() => setEditModalOpen(true)} src={edit} />;
};

export default EditButton;
