'use client'

import TagsList from "./TagsList"

function TagsWrapper() {
  return (
    <div className="flex flex-col min-h-screen gap-4 items-center">
      <TagsList />
    </div>
  )
}

export default TagsWrapper
