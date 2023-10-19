import React from 'react'
import { Avatar, AvatarGroup, Button, Card, Divider, Image } from '@nextui-org/react'
import { CiCalendar } from 'react-icons/ci'
import { BiLocationPlus } from 'react-icons/bi'
import { FaAngleRight, FaClock } from 'react-icons/fa'
import Link from 'next/link'
import NextLink from 'next/link'
import { FiClock } from 'react-icons/fi'

function TagItem({tag}) {
  return (
    <Card className='p-4 flex flex-col gap-4 dark:bg-darkSlate'>
      <div className='flex items-center gap-2'>
        <Image width={50} height={50} className='rounded-full object-cover' src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
        <div className='flex flex-col gap-2 p-2'>
          <h2 className='font-bold'>Football</h2>
          <div className='flex items-center gap-3 text-sm'>
            <p className="flex gap-2 items-center">
              <CiCalendar />
              <span>May 20, 2023</span>
            </p>
            <p className="flex gap-2 items-center">
              <FiClock />
              <span>Friday, 4-6 PM</span>
            </p>
          </div>
          <p className="flex gap-2 text-sm items-center">
            <BiLocationPlus />
            <span>Teslim Balogun Stadium</span>
          </p>
        </div>
      </div>
      <Button variant='bordered' className="border-2 border-orange rounded-md w-full text-orange font-semibold">Interested</Button>
      <Divider />
      <Link as={NextLink} prefetch={false} scroll={false} href={'#'} className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <AvatarGroup>
            <Avatar style={{width: 20, height: 20, objectFit: "cover"}} className='w-[15px] h-[15px]' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar style={{width: 20, height: 20, objectFit: "cover"}} className='w-[20px] h-[20px]' src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar style={{width: 20, height: 20, objectFit: "cover"}} className='w-[20px] h-[20px]' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </AvatarGroup>
          <p className='text-orange text-md font-medium'>11 Comments</p>
        </div>
        <p className='text-orange text-lg'>
          <FaAngleRight />
        </p>
      </Link>
    </Card>
  )
}

export default TagItem
