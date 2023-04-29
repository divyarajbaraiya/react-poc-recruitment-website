import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import "./assets/style.scss";

import {
  AppButton,
  AppFormInput,
  AppLoginTypes,
  AppLogo,
} from "../../components";
import { AuthContext } from "../../contexts";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: LoginForm) => {
    dispatch({ type: "LOGIN", payload: { ...data } });
    navigate("/");
    reset();
  };

  return (
    <>
      <AppLogo />

      <div className="login-container">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="login-container--form"
        >
          <div className="login-info">
            <h1 className="header-title">LOGIN</h1>
            <h2 className="description-title description-title--secondary">
              Please Login to continue
            </h2>
          </div>

          <AppLoginTypes />

          <AppFormInput
            className="mt-5"
            name={"email"}
            type={"email"}
            label={"Company Email ID"}
            placeholder={"Please enter your company email id."}
            required
            errorMessage={errors?.email?.message as string}
            register={register}
          />

          <AppFormInput
            className="mt-5"
            name={"password"}
            label={"Password"}
            type={"password"}
            placeholder={"please enter your password"}
            required
            errorMessage={errors?.password?.message as string}
            register={register}
          />

          <Link to="/dummy" className="login-forgot-password mt-4">
            Forgot Password?
          </Link>

          <AppButton type="submit" className="mt-4">
            <span>
              Log in <BsArrowRight />
            </span>
          </AppButton>

          <AppButton
            className="mt-4"
            variant="secondary"
            onClick={() => navigate("/register")}
          >
            <span>
              Don't have an account?{" "}
              <span className="active-link description-title description-title--primary">
                Register now
              </span>
            </span>
          </AppButton>
        </form>
      </div>
    </>
  );
};
