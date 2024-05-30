import React from 'react'

type TDashboardLayout = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: TDashboardLayout) {
  return (
    <section>
        {children}
    </section>
  )
}