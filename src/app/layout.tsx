import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "../../public/fonts/newFont";

export const metadata: Metadata = {
  title: "Cr-Cycle CRM",
  description: "A real estate CRM system.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased min-w-[300px] max-w-[1500px] mx-auto`}
      >
        {children}
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
