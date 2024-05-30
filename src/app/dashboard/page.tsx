'use client'

import React from 'react'
import Button from '@/components/ui/Button'

export default function DashboardPage() {

    const handleClick = () => {
        alert("Clicked")
    }
  return (
    <div>
       Dashboard Page
       <br/>
       <Button label="SA" onClick={handleClick}/>
    </div>
  )
}