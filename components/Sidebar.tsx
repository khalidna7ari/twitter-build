import React, { ReactComponentElement } from 'react'
import Image from 'next/image'
import SidebarColumn from './SidebarColumn'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import { HeroIcon } from '../types/app'

const sidebarData: { icon: HeroIcon; title: string }[] = [
  { icon: HomeIcon, title: 'home' },
  { icon: HashtagIcon, title: 'explore' },
  { icon: BellIcon, title: 'notifications' },
  { icon: MailIcon, title: 'messages' },
  { icon: BookmarkIcon, title: 'bookmarks' },
  { icon: CollectionIcon, title: 'lists' },
  { icon: UserIcon, title: 'sing in' },
  { icon: DotsCircleHorizontalIcon, title: 'more' },
]

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center col-span-2 px-4 md:items-start">
      <div className="relative w-10 h-10 m-3">
        <Image layout="fill" src="/twittericon.png" alt="twitter logo" />
      </div>
      {sidebarData.map((data) => {
        const { icon, title } = data
        return <SidebarColumn Icon={icon} title={title} />
      })}
    </div>
  )
}

export default Sidebar
