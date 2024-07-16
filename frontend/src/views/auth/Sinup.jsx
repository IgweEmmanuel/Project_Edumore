// Importing components and packages
// import Logo from '../../assets/logo.jpg'
import Header from '../base/headfoot/Header'
import Footer from '../base/headfoot/Footer'
import { useState } from 'react'
// import apiInstance from '../../utils/axios' //to make calls to api endpoints
import { register } from '../../utils/auth'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Register() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const { error } = await register(fullName, email, password, password2)
    if (error) {
      // alert(error)
      setIsLoading(false)
      // toast.error('Failed to singup', {
      //   position: 'top-right',
      //   autoClose: 3000,
      // })
    } else {
      navigate('/login')
      setIsLoading(false)
      toast.success('Registeration Successful', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      })
    }
  }
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mt-8 lg:px-8 md:mt-14">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-center text-3xl text-indigo-600 font-bold">
            Edumore
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Signup for an account!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="confpassword"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
            </div>

            <div>
              {isLoading === true && (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-[black] shadow-sm hover:bg-[#71EEFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  SignUp <i className="fas fa-spinner fa-spin"></i>
                </button>
              )}
              {isLoading === false && (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-[black] shadow-sm hover:bg-[#71EEFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  SignUp <i className="fas fa-sign-in-alt"></i>
                </button>
              )}
            </div>
            <div className="flex justify-between ">
              {/* <div className="text-sm">
                <Link
                  to="/fpwd"
                  className="font-semibold text-indigo-600 hover:text-indigo-600"
                >
                  Forgot password?
                </Link>
              </div> */}
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-600"
                >
                  Signin
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
