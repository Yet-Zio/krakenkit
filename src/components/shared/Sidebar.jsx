import React, { useState } from 'react'
import Logo from './Logo'
import CategoryDash from './extra/CategoryDash'
import SideOption from './extra/SideOption'

export default function Sidebar(props) {
  
  const pageFunc = props.pageFunc
  const activePage = props.activePage
  return (
    <div className='flex flex-col w-1/10 md:w-1/10 lg:w-1/6 h-full border-e border-gray-800 bg-emerald-950 p-5 '>
        <div className="mb-5">
            <Logo/>
        </div>
        <CategoryDash name="ANALYTICS"/>
        <SideOption activePage={activePage} name="Dashboard" option="dashboard" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Earnings" option="earnings" pageFunc={pageFunc}/>
        <CategoryDash name="CONTENT"/>
        <SideOption activePage={activePage} name="Notifications" option="notifications" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Favourites" option="favourites" pageFunc={pageFunc}/>
        <CategoryDash name="APP"/>
        <SideOption activePage={activePage} name="Theme" option="theme" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Feature Preview" option="preview" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Settings" option="settings" pageFunc={pageFunc}/>
    </div>
  )
}
