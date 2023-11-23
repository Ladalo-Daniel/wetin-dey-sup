'use client'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from 'react-query/devtools'


import React from 'react'

function ReactQuery({ children }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  )
}

export default ReactQuery