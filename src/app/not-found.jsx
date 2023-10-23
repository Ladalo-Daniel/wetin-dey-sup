"use client";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { TfiReload } from "react-icons/tfi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
export default function Notfound() {
  const router = useRouter();
  return (
    <section className="min-h-screen font-poppins flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image
          as={NextImage}
          src="/images/not-found.png"
          alt="not-found-image"
          width={100}
          height={100}
          className="animate-bounce"
        />
        <h1 className="text-2xl font-bold text-center py-2">404 Error page</h1>
        <p className="py-2 px-2 text-center">
          You&apos;v entered a url that does not exist on this site, check for
          typo errors, refresh or navigate back.
        </p>

        <div className="flex justify-center  items-center gap-x-4">
          <Button
          size="xl"
            startContent={<MdOutlineKeyboardBackspace />}
            className=" bg-orange rounded-none rounded-tr-xl rounded-bl-xl"
            onClick={() => {
              window.history.back();
            }}
          >
            Navigate back
          </Button>
          <Button
            startContent={<TfiReload />}
            onClick={(e) => router.refresh()}
            className=" rounded-none px-3 py-3 rounded-tl-xl rounded-br-xl  bg-orange "
          >
            Reload
          </Button>
        </div>
      </div>
    </section>
  );
}
