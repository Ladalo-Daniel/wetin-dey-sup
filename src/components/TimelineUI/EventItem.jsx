import { Card, Chip, Image, Link, User } from '@nextui-org/react'
import { BsCalendar2, BsClock } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'


function EventItem({event, key: _key}) {
  return (
            <Card className="dark:bg-darkSlate pb-4" key={_key}>
                <Link href="#" className='flex flex-col gap-2 items-start text-inherit w-auto '>       
                <Image 
                    src={event?.img} 
                    alt={event?.title}  
                    style={{width: 300, height: 200, objectFit: "cover",}}
                    className="object-contain rounded-sm "
                    />
                    <div className="flex flex-col gap-2 event?-center mt-2 pt-3 ml-4 mr-2">
                        <User   
                            name={event?.authorName}
                            description={(
                                <Link href='#' size="sm" isExternal>
                                @{event?.authorName}
                                </Link>
                            )}
                            avatarProps={{
                                src: event?.authorLogo
                            }} />
                    </div>
                    <Chip className=' ml-4 mt-2 bg-darkOrange p-1 rounded-md font-poppins w-max text-inherit'>{event?.tag}</Chip>
                    <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-2 items-center justify-between">
                        <div className='flex items-center gap-2'>
                        <BsCalendar2 />
                        <span>{event?.eventDate}</span>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <BsClock />
                            <span>{event?.day}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 ml-4'>
                        <SlLocationPin />
                        <span>{event?.location}</span>
                    </div>
                </Link>
            </Card>
  )
}

export default EventItem
