import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-e08b0-default-rtdb.firebaseio.com";

export default instance; 