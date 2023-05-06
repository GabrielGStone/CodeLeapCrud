import { FC } from "react";
import Post from "../Post/Post";
import InfiniteScroll from "react-infinite-scroll-component";

interface postsProps {
  posts: any;
  getNextPosts: () => void;
}

const Posts: FC<postsProps> = ({ posts, getNextPosts }) => {
  return (
    <>
      <InfiniteScroll
        dataLength={posts?.length || 10}
        next={getNextPosts}
        hasMore={true}
        loader={<>loading...</>}
      >
        {posts?.map(
          (data: {
            title: string;
            username: string;
            id: string;
            content: string;
            created_datetime: string;
          }) => {
            const { title, username, id, content, created_datetime } = data;
            return (
              <div key={id}>
                <Post
                  title={title}
                  username={username}
                  id={id}
                  content={content}
                  time={created_datetime}
                />
              </div>
            );
          }
        )}
      </InfiniteScroll>
    </>
  );
};

export default Posts;
