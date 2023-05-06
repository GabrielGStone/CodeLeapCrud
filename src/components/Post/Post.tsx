import { FC } from "react";
import {
  Container,
  PostContent,
  PostHeader,
  PostName,
  PostTime,
  Wrap,
} from "./styles";
import getRelativeTime from "../../utils/getRelativeTime";

interface postProps {
  title: string;
  username: string;
  time: string;
  content: string;
  id: string;
}
const Post: FC<postProps> = ({ title, username, time, content, id }) => {
  return (
    <Container>
      <PostHeader>{title}</PostHeader>
      <Wrap>
        <PostName>@{username}</PostName>
        <PostTime>{getRelativeTime(time)}</PostTime>
      </Wrap>
      <PostContent>{content}</PostContent>
    </Container>
  );
};

export default Post;
