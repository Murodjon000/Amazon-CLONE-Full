import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4c3b9.cloudfunctions.net/api",
  //"http://localhost:5001/clone-4c3b9/us-central1/api" The API (Cloud function) Url
});
export default instance;
