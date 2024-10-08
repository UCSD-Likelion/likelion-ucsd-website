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
    <html lang="en">
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <div className={`${gmarket.variable}`}>{children}</div>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
