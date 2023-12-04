import { Avatar, Button, Card, CardFooter, CardHeader, Chip, Image, Skeleton, User } from '@nextui-org/react'
import Link from 'next/link';
import { BsCalendar2, BsClock } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';

export default function EventCardSkeleton() {
    return (
        <div className='font-poppinsf flex flex-col gap-5 relative items-start '>
          <div className="flex gap-3 flex-1 overflow-x-scroll scrollbar-hide mt-2">
            {[...Array(7)].map((_, index) => (
              <Card
                className="dark:bg-darkSlate pb-4 w-[300px] rounded-md"
                key={index}
              >
                <Link
                  href={`/timeline/skeleton/${index}`}
                  className='flex flex-col gap-1 items-start text-inherit w-auto '
                >
                  <Skeleton >
                    <Image
                      src=""
                      alt=""
                      style={{ width: 300, height: 200, objectFit: "cover" }}
                      className="object-contain relative z-0 rounded-sm "
                    />
                  </Skeleton>
                  <div className="flex flex-row gap-1 event?-center pt-3 ml-4 mr-2">
                    <Skeleton className=' rounded-full'>
                      <User name="" description="" avatarProps={{ src: "" }} />
                    </Skeleton>
                    <Skeleton className=' rounded-md p-1'>
                      <div> name of the user yessss</div>
                    </Skeleton>
                  </div>
                  <Skeleton className='ml-4 mt-1  p-1 rounded-md  w-max text-white'>
                    <Chip className='ml-4 mt-1 bg-darkOrange p-1 rounded-md font-poppins w-max'>
                      Football Live Today Yesssssss
                    </Chip>
                  </Skeleton>
                  <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-1 items-center justify-between">
                    <div className='flex items-center gap-2 text-xs'>
                      <BsCalendar2 color='orange' />
                      <Skeleton className=' rounded-md'>Month Date</Skeleton>
                    </div>
                    <div className='flex items-center gap-1 ml-5 '>
                      <BsClock color='orange' />
                      <Skeleton className=' rounded-md'>Date Time Yess</Skeleton>
                    </div>
                  </div>
                  <div className='flex items-center gap-1 ml-4 text-sm'>
                    <SlLocationPin color='orange' />
                    <Skeleton className=' rounded-md'>Event Location let yess</Skeleton>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      );
}





export  function UpcomingEventSkeleton() {
  return (
      <>
      {[...Array(7)].map((_, index) => (
        <Link href={`/timeline/skeleton/${index}`} key={index} className='relative z-0'>
          <Card className='dark:bg-darkSlate py-4 px-2 flex flex-row justify-between items-center gap-1'>
            <div className='flex-[10%]'>
              <Skeleton className=' rounded-full'>
                <Avatar src="" alt="" size='lg' radius="rounded"/>
              </Skeleton>
            </div>
            <div className='flex-[90%]'>
              <div className='flex justify-between mx-4'>
                <Skeleton className=' rounded-md'>
                  <h3 className='font-bold'>Event Title Title should be long yes</h3>
                </Skeleton>
                <Skeleton>
                  {/* <h3 className='dark:text-orange text-lightRed'>Event Date</h3> */}
                </Skeleton>
              </div>
              <div>
                <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-1 items-center justify-between text-xs">
                  <div className='flex items-center gap-2'>
                    <BsCalendar2  color='orange' />
                    <Skeleton className=' rounded-md'>Event Date Always</Skeleton>
                  </div>
                </div>
                <div className='flex items-center gap-1 ml-4 text-sm'>
                  <SlLocationPin  color='orange' />
                  <Skeleton className=' rounded-md'>Event Location Locatiion yess</Skeleton>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
      </>
  );
}




export  function WhoToFollowSkeleton() {
  return (
    <Card className="w-[80vw] md:max-w-[340px] justify-self-center ml-6 mb-6 bg-white dark:bg-slate">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Skeleton className=' rounded-full'>
            <Avatar isBordered radius="full" size="md" src="" />
          </Skeleton>
          <div className="flex flex-col gap-1 items-start justify-center">
            <Skeleton>
              <h4 className="text-small font-semibold leading-none text-default-600 rounded-md">
                Gaza Daniel Nehemiah
              </h4>
            </Skeleton>
            <Skeleton>
              <h5 className="text-small tracking-tight text-default-400 dark:text-indigo rounded-md">
                @gaziiiiiiiiiii
              </h5>
            </Skeleton>
          </div>
        </div>
        <Skeleton className=' rounded-full'>
        <Button
          className="bg-darkOrange"
          color="primary"
          radius="full"
          size="sm"
          variant="solid"
          onPress={() => {
            // Handle follow/unfollow logic
          }}
        >
          Follow
        </Button>
        </Skeleton>
      </CardHeader>
      <CardFooter className="gap-3 dark:text-white md:cursor-pointer cursor-default">
        <div className="flex gap-1">
          <Skeleton>
            <p className="font-semibold text-small">{''}</p>
          </Skeleton>
          <Skeleton>
            <p className="text-small">Following</p>
          </Skeleton>
        </div>
        <div className="flex gap-1 md:cursor-pointer cursor-default">
          <Skeleton>
            <p className="font-semibold text-small">{''}</p>
          </Skeleton>
          <Skeleton>
            <p className="text-small">Followers okayyyyy</p>
          </Skeleton>
        </div>
      </CardFooter>
    </Card>
  );
}


