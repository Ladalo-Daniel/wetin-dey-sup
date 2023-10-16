"use client"

import useComments from "./useComments";
import CommentItem from "./CommentItem";

function CommentSection() {
  const {comments, appendComment} = useComments()
    
  return (
    <section className="mx-auto max-w-screen-lg flex flex-col flex-1 gap-4 scrollbar-hide">
      {comments?.map(comment => (<CommentItem comment={comment} key={`${comment?.name}-${Math.random()}`} />))}
    </section>
  )
}

export default CommentSection
