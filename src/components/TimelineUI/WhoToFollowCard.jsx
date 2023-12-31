"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Avatar,
  Button,
  Chip,
} from "@nextui-org/react";
import { InViewAnimation } from "./Reveal";
import { WhoToFollowSkeleton } from "./SkeletonUIs";

export default function WhoToFollowCard({ authName, profileImage }) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [follwers, setFollowers] = useState(0);

  //Note, the isLoading and useEffect is just for test, It's gonna be modified with the loading property from reactquery

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 1000ms (1 second)
    const delay = 5000;

    const timeoutId = setTimeout(() => {
      // After the delay, update the isLoading state to false
      setIsLoading(false);
    }, delay);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once during component mount

  if (isLoading) {
    return <WhoToFollowSkeleton />;
  }
  

  return (
    <InViewAnimation>
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
    </InViewAnimation>
  );
}
