import { FC } from "react";
import Post from "../Post/Post";

interface postsProps {
  posts: any;
}

const Posts: FC<postsProps> = ({ posts }) => {
  return (
    <>
      {posts.map(
        (data: {
          title: string;
          username: string;
          id: string;
          content: string;
          created_datetime: string;
        }) => {
          const { title, username, id, content, created_datetime } = data;
          return (
            <Post
              title={title}
              username={username}
              id={id}
              content={content}
              time={created_datetime}
            />
          );
        }
      )}
    </>
  );
};

export default Posts;
