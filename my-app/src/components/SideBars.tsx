import React from 'react'

export default function SideBars() {
  return (
    <div className="parent md:h-screen md:grid md:grid-cols-6">
      <section className="sidebar bg-green-400 md:col-span-1">Sidebar</section>
      <main className="main bg-blue-400 md:col-span-5">Main</main>
</div>
  )
}
