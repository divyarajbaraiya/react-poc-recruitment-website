import { PropsWithChildren } from "react";
import { FC } from "react";

import "./style.scss";

interface AuthLayoutProps {}

export const AuthLayout: FC<AuthLayoutProps> = ({
  children,
}: PropsWithChildren<AuthLayoutProps>) => {
  return <div className="auth-layout-container">{children}</div>;
};
