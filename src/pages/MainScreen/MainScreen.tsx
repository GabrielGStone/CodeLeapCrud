import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import Header from "../../components/Header/Header";
import { Container, PostsBody } from "./style";
import CreatePost from "../../components/CreatePost/CreatePost";
import usePosts from "../../actions/usePosts";
import Posts from "../../components/Posts/Posts";

const MainScreen = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const myPosts = useSelector((state: RootState) => state.post.posts);

  const navigate = useNavigate();
  const { getPosts } = usePosts();
  const [posts, setPosts] = useState<responseType | undefined>();

  const _getPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const getNextPosts = async () => {
    const nextPosts = await getPosts(posts?.next);
    setPosts({
      ...nextPosts,
      results: [...(posts?.results || []), ...nextPosts.results],
    });
  };
  useEffect(() => {
    _getPosts();
    //eslint-disable-next-line
  }, [myPosts]);

  useEffect(() => {
    !token && navigate("/signup");
    //eslint-disable-next-line
  }, [token]);

  return (
    <Layout>
      <Container>
        <Header />
        <PostsBody>
          <CreatePost />
          <Posts posts={posts?.results} getNextPosts={getNextPosts}></Posts>
        </PostsBody>
      </Container>
    </Layout>
  );
};

export default MainScreen;
