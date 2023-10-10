"use client";
import { Button } from "@nextui-org/react";
import Themeswitch from "../Themeswitcher";
export default function CreateEvent() {
  async function handleSubmit(data) {
    try {
    } catch (error) {}
  }
  return (
    <section className=" min-h-screen pt-16">
      <form onSubmit={handleSubmit}>
        <Button
          //  type="submit"
          className=" bg-orange text-white rounded"
        >
          Create
        </Button>
        <Themeswitch/>
      </form>
    </section>
  );
}
