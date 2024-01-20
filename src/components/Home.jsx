import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to='/dashboard' className='flex justify-center p-5'><button className="bg-emerald-500 text-white px-4 py-2 rounded-md">Go to dashboard</button></Link>
    </div>
  )
}
