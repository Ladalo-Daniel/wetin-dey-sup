'use client'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


import React from 'react'

function ReactQuery({ children }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQuery