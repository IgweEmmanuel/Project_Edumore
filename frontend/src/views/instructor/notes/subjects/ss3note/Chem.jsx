// import React from 'react'
import { useState } from 'react'
import { ClassCard } from '../ClassCard'
import { ss3VideoChem1, ss3TextChem1 } from '../../../content.js'
import Header from '../../../headfoot/Header.jsx'

export default function Weeks() {
  const [activeTab, setActiveTab] = useState('video')
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center font-bold text-2xl md:pt-4 lg:pt-4 md:text-4xl pb-4">
        <span>Study</span>
      </div>

      <div className="w-full flex justify-center gap-4 text-lg">
        <button
          className={`${
            activeTab === 'video'
              ? 'border-b-2 border-indigo-600'
              : 'text-[#a9a9a9]'
          }`}
          onClick={() => setActiveTab('video')}
        >
          Video
        </button>
        <button
          className={`${
            activeTab === 'text'
              ? 'border-b-2 border-indigo-600'
              : 'text-[#a9a9a9]'
          }`}
          onClick={() => setActiveTab('text')}
        >
          Text
        </button>
      </div>
      {activeTab == 'video' && (
        <div className="w-full pt-4">
          <div className="flex justify-center">
            <div className="text-center sm:pb-4">
              <span className="font-bold text-xl">Chemistry</span>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full grid grid-cols-1 place-items-center px-20">
              {ss3VideoChem1.map((el) => (
                <ClassCard key={el.id} url={el.video} title={el.title} />
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'text' && (
        <div className="w-full pt-4">
          <div className="flex justify-center">
            <div className="text-center sm:pb-4">
              <span className="font-bold text-xl">Chemistry</span>
            </div>
          </div>

          <div className="w-full flex justify-center md:py-10 lg:py-18">
            <div className="w-full grid grid-cols-1 place-items-center gap-8">
              {ss3TextChem1.map((el) => (
                <ClassCard key={el.id} url={el.text} title={el.title} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
