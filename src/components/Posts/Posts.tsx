import { FC } from "react";
import Post from "../Post/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { RootState } from "../../state";

interface postsProps {
  posts: any;
  getNextPosts: () => void;
}

const Posts: FC<postsProps> = ({ posts, getNextPosts }) => {
  const myPosts = useSelector((state: RootState) => state.post.posts);

  const isMyPost = (id: number) => {
    return myPosts.some((data: any) => data.id === id);
  };
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
            id: number;
            content: string;
            created_datetime: string;
          }) => {
            const { title, username, id, content, created_datetime } = data;
            return (
              <div key={id}>
                <Post
                  title={title}
                  username={username}
                  content={content}
                  time={created_datetime}
                  isMyPost={isMyPost(id)}
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
