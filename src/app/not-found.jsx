"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Notfound() {
  const router = useRouter();
  return (
    <section className="min-h-screen font-poppins">
      <h1 className="text-2xl font-bold text-center py-3">404 Error page</h1>
      <p className="py-2 text-center">
        You&apos;v entered a url that does not exist, check for typo errors, refresh or go back.
      </p>

      <div className="flex justify-center rounded-none items-center gap-x-4">
        <Button
        className=" bg-orange text-white"
          onClick={() => {
            window.history.back();
          }}
        >
        Go  Back
        </Button>
        <Button
          onClick={(e) => router.refresh()}
          className=" rounded-none px-2 py-3 bg-orange ring-red ring-2 "
        >
          Reload
        </Button>
      </div>
    </section>
  );
}
