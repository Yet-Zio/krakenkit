import React from 'react'
import Logo from './Logo'
import CategoryDash from './extra/CategoryDash'
import SideOption from './extra/SideOption'

export default function Sidebar(props) {
  const pageFunc = props.pageFunc
  return (
    <div className='flex flex-col w-1/10 md:w-1/10 lg:w-1/6 h-full border-e border-gray-800 bg-emerald-950 p-5 '>
        <div className="mb-5">
            <Logo/>
        </div>
        <CategoryDash name="ANALYTICS"/>
        <SideOption name="Dashboard" option="dashboard" pageFunc={pageFunc}/>
        <SideOption name="Earnings" option="earnings" pageFunc={pageFunc}/>
        <CategoryDash name="CONTENT"/>
        <SideOption name="Notifications" option="notifications" pageFunc={pageFunc}/>
        <SideOption name="Favourites" option="favourites" pageFunc={pageFunc}/>
        <CategoryDash name="APP"/>
        <SideOption name="Theme" option="theme" pageFunc={pageFunc}/>
        <SideOption name="Feature Preview" option="preview" pageFunc={pageFunc}/>
        <SideOption name="Settings" option="settings" pageFunc={pageFunc}/>
    </div>
  )
}
