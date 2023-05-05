import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { useDispatch } from "react-redux";
import { authActions } from "../../state/actions";
import Header from "../../components/Header/Header";
import { Container, PostsBody } from "./style";
import CreatePost from "../../components/CreatePost/CreatePost";
import usePosts from "../../actions/usePosts";
import Post from "../../components/Post/Post";
import Posts from "../../components/Posts/Posts";

const MainScreen = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getPosts } = usePosts();
  const [posts, setPosts] = useState([]);

  const _getPosts = async () => {
    const data = await getPosts();
    setPosts(data.results);
    console.log("aaa", data.results);
  };

  useEffect(() => {
    _getPosts();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    !token && navigate("/signup");
  }, [token]);

  return (
    <Layout>
      <Container>
        <Header />
        <PostsBody>
          <CreatePost />
          <Posts posts={posts}></Posts>
        </PostsBody>
      </Container>
    </Layout>
  );
};

export default MainScreen;
