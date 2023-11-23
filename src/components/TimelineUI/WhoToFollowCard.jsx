"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Avatar,
  Button,
  Chip,
} from "@nextui-org/react";
import Reveal from "./Reveal";

export default function WhoToFollowCard({ authName, profileImage }) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [follwers, setFollowers] = useState(0);

  return (
    <Reveal>
    <Card className=" w-[80vw] md:max-w-[340px] justify-self-center ml-6 mb-6 bg-white dark:bg-slate">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={profileImage} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {authName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400 dark:text-indigo">
              {authName}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? " bg-orange text-white border-default-200"
              : " bg-darkOrange"
            }
            color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => {
            setIsFollowed(!isFollowed);
            setFollowers(follwers ? follwers - 1 : follwers + 1);
          }}
        >
          {isFollowed ? "Follwing" : "Follow"}
        </Button>
      </CardHeader>
      <CardFooter className="gap-3 dark:text-white md:cursor-pointer cursor-default">
        <div className="flex gap-1 ">
          <p className="font-semibold  text-small">4</p>
          <p className="  text-small">Following</p>
        </div>
        <div className="flex gap-1 md:cursor-pointer cursor-default">
          <p className="font-semibold  text-small">{follwers}</p>
          <p className=" text-small">Followers</p>
        </div>
      </CardFooter>

    </Card>
    </Reveal>
  );
}
