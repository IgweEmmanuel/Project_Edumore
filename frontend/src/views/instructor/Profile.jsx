// 'use client

import Footer from '../base/headfoot/Footer'
import Header from './headfoot/Header'
// testing with image logo
import Logo from '../../assets/logo.svg'

const details = [
  { name: 'Alice' },
  { staff: 'Teacher', class: 'JSS2' },
  { dob: '5th Jan', gender: 'female' },
]

export default function TeacherProfile() {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex justify-start w-[50px] gap-2 py-10">
          <span>Welcom</span>

          <span className="text-indigo-500">{name} Alice</span>
        </div>
        <div className="grid grid-cols-1 justify-center text-center gap-4 pb-40 pt-20">
          <div className="md:text-2xl">
            <span>User Profile</span>
          </div>
          <div className="flex justify-center items-center rounded-full h-20 w-20 bg-slate-300 m-auto">
            <img src={Logo} alt="" />
          </div>
          <div>
            {details.map((item) => (
              <span key={item.name}>{item.name}</span>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <div className="border border-slate-800 rounded-md p-2 w-24 lg:w-40">
              <span>Teacher</span>
            </div>
            <div className="border border-slate-800 rounded-md p-2 w-24 lg:w-40">
              <span>{}Class</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="border-transparent p-2 w-24">
              <span>5th Jan</span>
            </div>
            <span className="border-2 border-slate-700"></span>
            <div className="border-transparent p-2 w-24">
              <span>{}Female</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
