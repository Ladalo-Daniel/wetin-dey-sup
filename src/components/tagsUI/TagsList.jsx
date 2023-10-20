import React from 'react'
import TagItem from './TagItem'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import range from '@/utils/range';
import { SiFastapi } from 'react-icons/si';

function TagsList() {
  const rand = range(0, 25)
  return (
      <VerticalTimeline lineColor='orange'>
      {
        rand?.map(item => (
          <VerticalTimelineElement visible={true} key={item} 
            className="vertical-timeline-element--work"
            style={{backgroundColor: "inherit", border: "none"}}
            contentStyle={{ background: 'inherit', color: 'inherit' }}
            contentArrowStyle={{ borderRight: '7px solid  inherit' }}
            date="May 20, 2023"
            dateClassName='p-2 m-2'
            iconStyle={{ background: 'inherit', color: 'inherit', borderColor: "orange" }}
            icon={<SiFastapi className="animate-spin text-orange bg-orange" />}
          >
            <TagItem tag={{}} />
          </VerticalTimelineElement>
        ))
      }
      </VerticalTimeline>
  )
}

export default TagsList
