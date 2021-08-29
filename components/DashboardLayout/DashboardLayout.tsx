import { useState } from "react";
import Header from "../Header";
import { Container } from "./DashboardLayout.styles";

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
      {children}
    </Container>
  );
}
