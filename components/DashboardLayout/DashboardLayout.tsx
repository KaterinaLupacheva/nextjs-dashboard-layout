import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Container, Content } from "./DashboardLayout.styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
