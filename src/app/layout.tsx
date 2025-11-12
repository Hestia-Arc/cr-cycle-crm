import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
import { quicksand } from "../../public/fonts/newFont";
import { baseUrl } from "./robots";
import QueryClientProvider from "@/lib/react-query/query-client-provider";
import queryClient from "@/lib/react-query/query-client";

const appInfo = {
  title: "Cr-Cycle - Streamline Your Workflow",
  description: "Boost productivity, reduce costs, and scale your business",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: appInfo.title,
    template: "%s | Streamline Your Workflow",
  },
  description: appInfo.description,
  keywords: ["crm", "real-estate"],
  openGraph: {
    title: appInfo.title,
    description: appInfo.description,
    url: baseUrl,
    siteName: "Cr-Cycle",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.className} antialiased min-w-[300px] max-w-7xl mx-auto px-4 sm:px-6`}
      >
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* <Analytics /> */}
          {/* <SpeedInsights /> */}
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

// hierarchy
{
  /* <Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<NotFound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout> */
}
