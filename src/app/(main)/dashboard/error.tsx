"use client";

import PrimaryButton from "@/components/shared/buttons/primary-button";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-semibold text-error mb-4">
        Something went wrong 😬
      </h2>
      <p className="mb-6 text-dark-green max-w-md text-center">{error.message}</p>
      <PrimaryButton onClick={reset}>Try again</PrimaryButton>
    </div>
  );
}
