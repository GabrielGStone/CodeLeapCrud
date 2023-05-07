import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import toast_config from "../config/toast_config";

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
      toast.success("Post created", toast_config);

      return response.data;
    } catch (err: any) {
      toast.success("Error", toast_config);
      return err.response?.data;
    }
  };

  const patch = async (endpoint: string, payload: any) => {
    try {
      const response = await axios.patch(endpoint, payload);
      toast.success("Post edited", toast_config);
      return response;
    } catch (err: any) {
      toast.success("Error", toast_config);
      return err.response?.data;
    }
  };

  const _delete = (endpoint: string) => {
    try {
      axios.delete(endpoint);
      toast.success("Post deleted", toast_config);
    } catch (err: any) {
      toast.success("Error", toast_config);
      return err.response?.data;
    }
  };
  return { get, post, patch, _delete };
};
export default useRequest;
