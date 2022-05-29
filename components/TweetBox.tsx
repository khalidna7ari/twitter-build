import React, { useState } from 'react'
import Image from 'next/image'

import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { ArrayIcons } from '../types/app'

const icons: ArrayIcons = [
  <PhotographIcon className="w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150" />,
  <SearchCircleIcon className="w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150" />,
  <EmojiHappyIcon className="w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150" />,
  <CalendarIcon className="w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150" />,
  <LocationMarkerIcon className="w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150" />,
]

const TweetBox = () => {
  const [input, setInput] = useState<string>('')
  return (
    <div className="flex p-5 space-x-2">
      <div className="relative mt-4 w-14 h-14">
        <Image
          src={'/avi.jpg'}
          layout="fill"
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex items-center flex-1 pl-2">
        <form className="flex flex-col flex-1">
          <input
            type="text"
            className="w-full h-24 text-xl outline-none placeholder:text-xl"
            placeholder="What's Happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              {icons.map((icon) => {
                return <>{icon}</>
              })}
            </div>
            <button
              className="px-5 py-2 font-bold text-white rounded-full bg-twitter disabled:opacity-40"
              disabled={!input}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
