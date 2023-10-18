import React from 'react'
import { Button, Card } from '@nextui-org/react'

function TagItem({tag}) {
  return (
    <Card className='p-4'>
      <Button variant='bordered' className="border-2 border-orange rounded-md">Interested</Button>
    </Card>
  )
}

export default TagItem
