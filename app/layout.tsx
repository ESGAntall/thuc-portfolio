import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider } from "components/ui/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Thuc Portfolio</title>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="120x120"
        ></link>
      </head>
      <body>
        <main>
          <Provider>{children}</Provider>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
