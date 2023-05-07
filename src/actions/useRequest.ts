import { useCallback } from "react";
import axios from "axios";

const useRequest = () => {
  const get = useCallback(async (endpoint: string) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (err: any) {
      return err.response?.data;
    }
  }, []);

  const post = async (
    endpoint: string,
    payload: { username: string; title: string; content: string }
  ) => {
    try {
      const response = await axios.post(endpoint, payload);
      return response.data;
    } catch (err: any) {
      return err.response?.data;
    }
  };

  const patch = async (endpoint: string, payload: any) => {
    const response = await axios({
      method: "patch",
      url: endpoint,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
        "Access-Control-Allow-Headers": "Content-Type",
        Allow: "GET, PUT, PATCH, DELETE, HEAD, OPTIONS",
        Vary: "Accept",
        method: "PATCH",
      },
      data: payload,
    });
    return response;
  };

  const _delete = async (endpoint: string) => {
    await axios({
      method: "delete",
      url: endpoint,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-HTTP-Method-Override": "DELETE",
      },
    });
  };

  return { get, post, patch, _delete };
};

export default useRequest;
