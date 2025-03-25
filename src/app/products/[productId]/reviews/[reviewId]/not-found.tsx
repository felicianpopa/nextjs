"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
const NotFound = () => {
    const pathname = usePathname()
  return (
    <div>
      <h1>Reviews not found for {pathname}</h1>
    </div>
  )
}

export default NotFound
