import axios from "axios";

const httpService = axios.create({
  baseURL: "https://aguila.herokuapp.com/",
  timeout: 10000,
  withCredentials: "include",
  headers: {
    "Content-Type": "application/json",
    Origin: "https://aguila7.web.app",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error && error.response.data) {
      if (error.response.status === 401) {
        const path = "refreshToken";
        await httpService.post(path, { id: loggedInUser._id });

        return httpService(error.config);
      } else if (error.response.status === 500) {
        console.log("error");
      }
      return { type: "error", message: error.response.data };
    } else {
      console.log("error");
    }
  }
);

const logout = async () => {
  const res = await httpService.get("logout");
  if (res) {
    // localStorage.removeItem(process.env.REACT_APP_PROJECT_USER);
    //window.location.assign("/");
  }
};
export { httpService, logout };
