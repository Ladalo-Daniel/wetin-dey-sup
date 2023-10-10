"use client";
import { Button } from "@nextui-org/react";
export default function Notfound() {
  return (
    <section className=" font-poppins">
      <h1 className="text-lg font-medium text-center">Page not found</h1>
      <p className=" text-center">
        You&apos;v entered a url that does not exist, check for typo errors
      </p>

      <div className="flex  justify-center items-center gap-x-4">
        <Button
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </Button>
      </div>
    </section>
  );
}
