'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
// import { logout } from '../../../utils/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/abouts' },
  // { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contacts' },
  { name: 'Dashboard', href: '/teacher/dashboard' },
  // { name: 'Profile', href: '/teacher/profile' },
]

export default function Header() {
  const navigate = useNavigate()
  // const toRegister = () => {
  //   navigate('/register')
  // }
  const toLogout = () => {
    navigate('/logout/')
    toast.success('You have logged out', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    })
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Link to="/home">
                <img alt="" src={Logo} className="h-8 w-auto" />
              </Link>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            className="hidden lg:flex lg:flex-1 lg:justify-end"
            type="submit"
            onClick={toLogout}
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </button>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span id="bt" className="sr-only">
                  Your Company
                </span>
                <img alt="" src="" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <button className="py-6" type="submit" onClick={toLogout}>
                  Lout out
                </button>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
