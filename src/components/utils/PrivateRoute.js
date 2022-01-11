import { useSelector } from "react-redux";
import { getUser } from "../../store/user";
import { Navigate } from "react-router-dom";
export default function PrivateRoute(props) {
  const user = useSelector(getUser);
  console.log("loging",user)
  return user.data.token ? (props.children) : <Navigate to="/user/login" />;
}
