import styled from "styled-components";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TextInput from "../../utils/TextInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signIn, getUser, errorReseted } from "../../../store/user";
import { loadCartItems } from "../../../store/cart";

const Title = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`;
const ErrMsg = styled.span`
  color: red;
  font-size: 15px;
  margin-top: 8px;
`;
const SubmitBtn = styled.button`
  cursor: pointer;
  display: flex;
  background: transparent;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  border: none;
  background-color: #3187ed;
  border-radius: 12px;
`;
const RegisterLink = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
`;
const RouteLink = styled(NavLink)`
  margin-left: 5px;
  color: #3187ed;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .max(18)
      .min(6, "Password must be at least 6 characters"),
  });
  const submitHandler = (values) => {
    const data = values;
    dispatch(signIn(data));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitHandler,
  });
  const errorResetHandler = () =>
    user.error ? dispatch(errorReseted()) : null;
  useEffect(() => {
    errorResetHandler();
  },[]);
  useEffect(() => {
    if (user.redirectTo) {
      dispatch(loadCartItems());
      navigate("/home");
    }
  }, [user.redirectTo]);
  return (
    <>
      <Title>Login</Title>
      <TextInput
        label="Email"
        sx={{ mt: 2 }}
        type="email"
        name="email"
        formik={formik}
      />
      <TextInput
        label="Password"
        sx={{ mt: 2 }}
        type="password"
        name="password"
        formik={formik}
      />
      {user?.error && <ErrMsg>Invalid Email or Password</ErrMsg>}

      <SubmitBtn onClick={formik.handleSubmit}>Login</SubmitBtn>
      <RegisterLink>
        Don't have an account?
        <RouteLink to="/user/register" onClick={errorResetHandler}>
          Register
        </RouteLink>
      </RegisterLink>
    </>
  );
}
