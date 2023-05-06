import { FC } from "react";
import {
  ButtonContainer,
  Content,
  PostContent,
  PostHeader,
  PostName,
  PostTime,
  Wrap,
} from "./styles";
import getRelativeTime from "../../utils/getRelativeTime";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";

interface postProps {
  title: string;
  username: string;
  time: string;
  content: string;
  isMyPost: boolean;
}
const Post: FC<postProps> = ({ title, username, time, content, isMyPost }) => {
  return (
    <>
      <PostHeader>
        <>{title}</>
        {isMyPost && (
          <ButtonContainer>
            <DeleteButton />
            <EditButton />
          </ButtonContainer>
        )}
      </PostHeader>
      <Content>
        <Wrap>
          <PostName>@{username}</PostName>
          <PostTime>{getRelativeTime(time)}</PostTime>
        </Wrap>
        <PostContent>{content}</PostContent>
      </Content>
    </>
  );
};

export default Post;
