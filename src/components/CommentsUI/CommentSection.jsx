"use client"

import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import useComments from "./useComments";
import { useGetComments } from "@/lib/react-query/queriesMutations";

function CommentSection() {
  const {data} = useGetComments('65522602756e3b019f3bdb15')
  console.log(data)

  const comments = []
    
  return (
    <section className="mx-auto max-w-screen-lg flex flex-col flex-1 gap-4 scrollbar-hide">
      {comments?.map(comment => (<CommentItem comment={comment} key={`${comment?.name}-${Math.random()}`} />))}
    </section>
  )
}

export default CommentSection
