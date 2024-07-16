// import React from 'react'
import { useState } from 'react'
import { Card } from './Card'
import { first, second, third } from './content.js'
import { Link } from 'react-router-dom'

export const DashContent = () => {
  const [activeTab, setActiveTab] = useState('first')
  return (
    <div>
      <div className="w-full flex justify-center gap-4 text-lg">
        <button
          className={`${
            activeTab === 'first'
              ? 'border-b-2 border-indigo-600'
              : 'text-[#a9a9a9]'
          }`}
          onClick={() => setActiveTab('first')}
        >
          SS1
        </button>
        <button
          className={`${
            activeTab === 'second'
              ? 'border-b-2 border-indigo-600'
              : 'text-[#a9a9a9]'
          }`}
          onClick={() => setActiveTab('second')}
        >
          SS2
        </button>
        <button
          className={`${
            activeTab === 'third'
              ? 'border-b-2 border-indigo-600'
              : 'text-[#a9a9a9]'
          }`}
          onClick={() => setActiveTab('third')}
        >
          SS3
        </button>
      </div>
      {activeTab == 'first' && (
        <div className="w-full pt-4">
          <div className="w-full flex justify-center font-bold text-2xl md:pt-4 lg:pt-4 pb-4">
            <span>My Lesson Notes</span>
          </div>
          <div className="flex justify-center">
            <div className="text-center sm:pb-4">
              {/* <span className="font-bold text-xl">Biology</span> */}
              <p>Select your subject</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:py-10 lg:py-18">
            <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
              {first.map((el) => (
                <Link key={el.id} to={el.url}>
                  <Card image={el.image} title={el.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'second' && (
        <div className="w-full pt-4">
          <div className="w-full flex justify-center font-bold text-2xl md:pt-4 lg:pt-4 pb-4">
            <span>My Lesson Notes</span>
          </div>
          <div className="flex justify-center">
            <div className="text-center sm:pb-4">
              {/* <span className="font-bold text-xl">Biology</span> */}
              <p>Select your subject</p>
            </div>
          </div>

          <div className="w-full flex justify-center md:py-10 lg:py-18">
            <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
              {second.map((el) => (
                <Link key={el.id} to={el.url}>
                  <Card image={el.image} title={el.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'third' && (
        <div className="w-full pt-4">
          <div className="w-full flex justify-center font-bold text-2xl md:pt-4 lg:pt-4 pb-4">
            <span>My Lesson Notes</span>
          </div>
          <div className="flex justify-center">
            <div className="text-center sm:pb-4">
              {/* <span className="font-bold text-xl">Biology</span> */}
              <p>Select your subject</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:py-10 lg:py-18">
            <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
              {third.map((el) => (
                <Link key={el.id} to={el.url}>
                  <Card image={el.image} title={el.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
