import { FC, useContext, useState } from "react";
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
  AppModal,
} from "../../components";
import { AuthContext } from "../../contexts";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6)
    .matches(/[0-9]/, "password requires one number")
    .matches(/[^\w]/, "password requires a symbol")
    .max(32)
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must be match"),
  location: yup.string().required(),
  contact: yup.string().required(),
  companyName: yup.string().required("company name is a required field"),
  agree: yup.boolean().required(),
});

type RegisterForm = {
  companyName: string;
  contact: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyWebsite: string;
  location: string;
  designation: string;
  agree: boolean;
};

export const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  });

  const agreeValue = watch("agree");

  const [show, setShow] = useState(false);
  const [data, setData] = useState<RegisterForm>();

  const onSubmitHandler = (formData: RegisterForm) => {
    setShow(true);
    setData(formData);
  };

  const handleConfirm = () => {
    setShow(false);
    reset();
    dispatch({ type: "REGISTER", payload: { ...data } });
    navigate("/");
  };

  return (
    <>
      <AppModal
        show={show}
        title="Registration"
        description="Your registration has been successfully done"
        onHide={handleConfirm}
        onSubmit={handleConfirm}
        isConfirmation
      />

      <AppLogo />

      <div className="register-container row">
        <div className="col-5">
          <div className="register-container--image"></div>
          <div className="register-container--image--vector"></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="register-container--form col-5"
        >
          <div className="register-info">
            <h1 className="header-title">Register</h1>
            <h2 className="description-title description-title--secondary">
              Please sign up to continue
            </h2>
          </div>

          <AppLoginTypes />

          <div className="row">
            <div className="col-6">
              <AppFormInput
                className="mt-5"
                name={"companyName"}
                label={"Company Name"}
                placeholder={"Enter company name"}
                required
                errorMessage={errors?.companyName?.message as string}
                register={register}
              />
            </div>

            <div className="col-6">
              <AppFormInput
                className="mt-5"
                name={"contact"}
                label={"Contact Number"}
                placeholder={"+91 1234567890"}
                required
                errorMessage={errors?.contact?.message as string}
                register={register}
              />
            </div>

            <div className="col-6">
              <AppFormInput
                className="mt-5"
                name={"location"}
                label={"Location"}
                placeholder={"Location"}
                required
                errorMessage={errors?.location?.message as string}
                register={register}
              />
            </div>

            <div className="col-6">
              <AppFormInput
                className="mt-5"
                name={"designation"}
                label={"Designation"}
                placeholder={"Enter your designation"}
                errorMessage={errors?.designation?.message as string}
                register={register}
              />
            </div>

            <div className="col-6">
              <AppFormInput
                className="mt-5"
                name={"companyWebsite"}
                label={"company Website"}
                placeholder={"Enter company website url"}
                errorMessage={errors?.companyWebsite?.message as string}
                register={register}
              />
            </div>

            <div className="col-6">
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
            </div>

            <div className="col-6">
              <AppFormInput
                className="mt-5"
                name={"password"}
                label={"Set Password"}
                type={"password"}
                placeholder={"please enter your password"}
                required
                errorMessage={errors?.password?.message as string}
                register={register}
              />
            </div>

            <div className="col-6">
              <AppFormInput
                className="mt-5"
                name={"confirmPassword"}
                label={"Confirm Password"}
                type={"password"}
                placeholder={"please enter confirm password"}
                required
                errorMessage={errors?.confirmPassword?.message as string}
                register={register}
              />
            </div>
          </div>

          <div className="register-action mt-5">
            <div>
              <div className="d-flex">
                <input
                  type="checkbox"
                  checked={agreeValue}
                  {...register("agree")}
                />
                <span className="description-title description-title--secondary ml-2">
                  &nbsp; I agree with{" "}
                  <span className="active-link">CB T & C *</span> and{" "}
                  <span className="active-link">Privacy Policy *</span>
                </span>
              </div>

              <p className="error-message">{errors?.agree?.message}</p>
            </div>

            <AppButton type="submit" className="mt-4">
              <span>Register</span>
            </AppButton>

            <AppButton
              className="mt-4"
              variant="secondary"
              onClick={() => navigate("/login")}
            >
              <span>
                Already have an account?{" "}
                <span className="active-link description-title description-title--primary">
                  Login
                </span>
              </span>
            </AppButton>
          </div>
        </form>
      </div>
    </>
  );
};
