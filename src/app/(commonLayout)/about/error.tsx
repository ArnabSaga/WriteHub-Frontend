"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const AboutError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>Something went worng: Please check again</h1>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
};

export default AboutError;
