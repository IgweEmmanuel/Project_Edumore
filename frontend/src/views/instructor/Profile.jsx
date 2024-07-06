// 'use client'

import Footer from '../base/headfoot/Footer'
import Header from './headfoot/Header'

export default function TeacherProfile() {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex justify-start w-[50px] gap-2 py-10">
          <span>Welcom</span>
          <span className="text-indigo-500">{name} Alice</span>
        </div>
        <div>
          <div></div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
