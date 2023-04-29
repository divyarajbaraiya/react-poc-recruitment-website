import { PropsWithChildren } from "react";
import { FC } from "react";
import { Footer, Header } from "../components";

import "./style.scss";

interface AppLayoutProps {}

export const AppLayout: FC<AppLayoutProps> = ({
  children,
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <>
      <Header />
      <section className="app-layout-container-section">{children}</section>
      <Footer />
    </>
  );
};
