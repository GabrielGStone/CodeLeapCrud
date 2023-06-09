import { FC, useState } from "react";
import {
  ButtonContainer,
  Content,
  PostContent,
  PostHeader,
  PostName,
  PostTime,
  Title,
  Wrap,
} from "./styles";
import getRelativeTime from "../../utils/getRelativeTime";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

interface postProps {
  title: string;
  username: string;
  time: string;
  content: string;
  isMyPost: boolean;
  id: number;
}
const Post: FC<postProps> = ({
  title,
  username,
  time,
  content,
  isMyPost,
  id,
}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const paragraphs = content.split("\n");
  return (
    <>
      <EditModal
        setEditModalOpen={setEditModalOpen}
        editModalOpen={editModalOpen}
        id={id}
        title={title}
        content={content}
      />
      <DeleteModal
        setDeleteModalOpen={setDeleteModalOpen}
        deleteModalOpen={deleteModalOpen}
        id={id}
      />
      <PostHeader>
        <Title>{title}</Title>
        {isMyPost && (
          <ButtonContainer>
            <DeleteButton setDeleteModalOpen={setDeleteModalOpen} />
            <EditButton setEditModalOpen={setEditModalOpen} />
          </ButtonContainer>
        )}
      </PostHeader>
      <Content>
        <Wrap>
          <PostName>@{username}</PostName>
          <PostTime>{getRelativeTime(time)}</PostTime>
        </Wrap>
        {paragraphs.map((paragraph: string, index: number) => (
          <PostContent key={index}>{paragraph}</PostContent>
        ))}
      </Content>
    </>
  );
};

export default Post;
