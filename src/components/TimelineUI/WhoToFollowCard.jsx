"use client"

import React from "react";
import {Card, CardHeader, CardFooter, Avatar, Button, Chip} from "@nextui-org/react";

export default function WhoToFollowCard({ events }) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className=" flex flex-col gap-1 w-[90vw] md:w-[400px] lg:w-[400px] xl:w[500px] mx-4 mb-36 bg-white dark:bg-darkSlate font-poppins ">
        <Chip className='text-md font-bold text-white rounded-small bg-darkOrange mt-2 ml-6 mb-2  '>Who to follow</Chip>
        {events.map(event=> (
            <Card key={event.authorName} className=" w-[80vw] md:max-w-[340px] justify-self-center ml-6 mb-6 bg-white dark:bg-slate">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src={event?.img} />
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">{event?.authorName}</h4>
                    <h5 className="text-small tracking-tight text-default-400 dark:text-indigo">@{event?.authorName}</h5>
                </div>
                </div>
                <Button
                className={isFollowed ? " bg-orange text-white border-default-200" : " bg-darkOrange"}
                color="primary"
                radius="full"
                size="sm"
                variant={isFollowed ? "bordered" : "solid"}
                onPress={() => setIsFollowed(!isFollowed)}
                >
                {isFollowed ? "Unfollow" : "Follow"}
                </Button>
            </CardHeader>
            <CardFooter className="gap-3 dark:text-white">
                <div className="flex gap-1">
                <p className="font-semibold  text-small">4</p>
                <p className="  text-small">Following</p>
                </div>
                <div className="flex gap-1">
                <p className="font-semibold  text-small">97.1K</p>
                <p className=" text-small">Followers</p>
                </div>
            </CardFooter>
            </Card>
        ))
       }
    </Card>
  );
}
