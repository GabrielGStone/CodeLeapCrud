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
    try {
      const response = await axios.patch(endpoint, payload);
      return response.data;
    } catch (err: any) {
      return err.response?.data;
    }
  };

  const _delete = async (endpoint: string) => {
    await axios.delete(endpoint);
  };

  return { get, post, patch, _delete };
};

export default useRequest;
