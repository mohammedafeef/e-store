import styled from "styled-components";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import TextInput from "../../utils/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register,userRedirected } from "../../../store/user";

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
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  border: none;
  background-color: #3187ed;
  box-shadow: 0px 11px 27px rgba(49, 135, 237, 0.35);
  border-radius: 12px;
`;
const LoginLink = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
`;
const RouteLink = styled(Link)`
  margin-left: 5px;
  color: #3187ed;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
export default function Register() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    username: yup.string().required("Username is required").max(30),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .max(20)
      .min(6, "Password must be at least 6 characters"),
  });
  const submitHandler = async (values) => {
    const data = values;
    await dispatch(register(data));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitHandler,
  });

  useEffect(() => {
    if (user.redirectTo) {
      navigate("/user/login");
      dispatch(userRedirected());
    }
  }, [user.redirectTo]);

  return (
    <>
      <Title>Register</Title>
      <TextInput
        label="username"
        sx={{ mt: 2 }}
        name="username"
        formik={formik}
      />
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
      {user?.error && <ErrMsg>Email or Username already taken</ErrMsg>}
      <SubmitBtn onClick={formik.handleSubmit}>Register</SubmitBtn>
      <LoginLink>
        Already have an account? <RouteLink to="/user/login">Login</RouteLink>
      </LoginLink>
    </>
  );
}
