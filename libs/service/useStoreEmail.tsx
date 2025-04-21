import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type bodyType = {
  name: string;
  email: string;
  message: string;
};

export const useStoreEmail = () => {
  return useMutation({
    mutationFn: async (body: bodyType) => {
      const store = await axios.post("/api/emailapi", body);

      return store.data;
    },
    mutationKey: ["storeEmail"],
  });
};
