import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { useDispatch } from "react-redux";
import { authActions } from "../../state/actions";
import Header from "../../components/Header/Header";
import { Container, PostsBody } from "./style";
import CreatePost from "../../components/CreatePost/CreatePost";

const MainScreen = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    !token && navigate("/signup");
  }, [token]);

  return (
    <Layout>
      <Container>
        <Header />
        <PostsBody>
          <CreatePost />
        </PostsBody>
      </Container>
    </Layout>
  );
};

export default MainScreen;
