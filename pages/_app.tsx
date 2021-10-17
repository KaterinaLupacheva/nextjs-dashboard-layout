import "../styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}
export default MyApp;
