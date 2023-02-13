import { clientInstance } from "../config/config";

const editFile = (id) => {
  return clientInstance.post(`/api/Document/Update/${id}`);
};

export default editFile;
