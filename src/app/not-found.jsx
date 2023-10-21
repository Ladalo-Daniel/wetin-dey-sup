"use client";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import NextImage from 'next/image'

export default function Notfound() {
  const router = useRouter();
  return (
    <section className="min-h-screen font-poppins flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image as={NextImage} src="/images/not-found.png" width={100} height={100} className="animate-bounce" />
        <h1 className="text-2xl font-bold text-center py-3">404 Error page</h1>
        <p className="py-2 text-center">
          You&apos;v entered a url that does not exist, check for typo errors, refresh or go back.
        </p>

        <div className="flex justify-center rounded-none items-center gap-x-4">
          <Button
          className=" bg-orange hover:bg-darkOrange text-white rounded-md"
            onClick={() => {
              window.history.back();
            }}
          >
          Go  Back
          </Button>
          <Button
            onClick={(e) => router.refresh()}
            className=" rounded-md px-2 py-3 bg-darkOrange hover:bg-lightOrange"
          >
            Reload
          </Button>
        </div>
      </div>
      
    </section>
  );
}
