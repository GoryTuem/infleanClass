import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  async function (response) {
    return response;
  },
  async (error) => {
    if (error.response.data.status === 401) {
      if (error.response.data.error === "Unauthorized") {
        const originalRequest = error.config;
        const refreshToken = await localStorage.getItem("refreshToken");
        // token refresh 요청
        await axios
          .post(
            `http://localhost:8080/api/auth/refresh`, // token refresh api
            { refreshToken },
          )
          .then(async function (response) {
            const {
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            } = response.data;

            localStorage.setItem("accessToken", newAccessToken);
            localStorage.setItem("refreshToken", newRefreshToken);

            originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
            // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
            return axios(originalRequest);
          })
          .catch(function (error) {
            console.log("error!!=>" + error);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            alert("다시 로그인해 주세요.");

            window.location.href = "/login";
            return false;
          });
      }
    } else {
      alert(error.response.data.message);
    }
  },
);

export default instance;
