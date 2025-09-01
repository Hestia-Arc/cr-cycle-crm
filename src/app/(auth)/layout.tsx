import React, { ReactNode, Suspense } from "react";
import AuthLayoutComponent from "./_components/auth-layout";
import { ErrorBoundary } from "react-error-boundary";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <AuthLayoutComponent>{children}</AuthLayoutComponent>
      </ErrorBoundary>
    </Suspense>
  );
}

export default AuthLayout;
