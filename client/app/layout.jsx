import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

export const metadata = {
  title: "Likelion UCSD | UCSD 멋쟁이사자처럼",
  description: "Likelion UCSD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>{children}</body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
