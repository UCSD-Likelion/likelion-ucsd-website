import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { gmarket } from "../font/font";

export const metadata = {
  title: "Likelion UCSD | UCSD 멋쟁이사자처럼",
  description: "Likelion UCSD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <AppRouterCacheProvider>
          <body style={{ margin: 0, height: "100%"}}>
            <div className={`${gmarket.variable}`}>{children}</div>
          </body>
      </AppRouterCacheProvider>
    </html>
  );
}
