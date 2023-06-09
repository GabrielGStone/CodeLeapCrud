import useRequest from "./useRequest";

const usePosts = () => {
  const { get, post, patch, _delete } = useRequest();

  const getPosts = async (endpoint?: any) => {
    const res = endpoint
      ? await get(endpoint)
      : await get(`https://dev.codeleap.co.uk/careers/`);
    return res;
  };

  const postPosts = async (payload: {
    username: string;
    title: string;
    content: string;
  }) => {
    const res = await post(`https://dev.codeleap.co.uk/careers/`, payload);
    return res;
  };

  const patchPosts = async (id: number, title: string, content: string) => {
    const payload = { title: title, content: content };

    const res = await patch(
      `https://dev.codeleap.co.uk/careers/${id}/`,
      payload
    );
    return res;
  };

  const deletePosts = async (id: any) => {
    await _delete(`https://dev.codeleap.co.uk/careers/${id}/`);
  };

  return { getPosts, postPosts, patchPosts, deletePosts };
};

export default usePosts;
