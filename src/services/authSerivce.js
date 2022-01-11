import BackendService from "./BackendService";
const login =  (data) => {
  return BackendService.post("/user/login", data);
};
const register =  (data) => {
  return BackendService.post("/user/register", data);
};
const authService = {
  login,
  register,
};
export default authService;
