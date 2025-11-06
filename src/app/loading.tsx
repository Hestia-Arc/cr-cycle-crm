"use client";

import React from "react";

import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return (
    <div className="h-screen flex items-center justify-center text-lg">
      <div className="flex gap-3 items-center justify-center">
        <Spinner />
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export default Loading;
