import React from 'react'
import TagItem from './TagItem'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import range from '@/utils/range';
import toast from 'react-hot-toast';

function TagsList() {
  const rand = range(0, 10)
  return (
    <div className='py-4 my-2 px-4 flex flex-col gap-4'>
      {
        rand?.map(item => (
          <TagItem key={item} />
        ))
      }
    </div>
  )
}

export default TagsList
