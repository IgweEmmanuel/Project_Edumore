// Importing components and packages
// import Logo from '../../assets/logo.jpg'
import Header from '../base/headfoot/Header'
import Footer from '../base/headfoot/Footer'
import { Link } from 'react-router-dom'

export default function Verify() {
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mt-20 lg:px-8 md:mt-40 md:mb-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-center text-4xl text-indigo-600 font-bold">
            Edumore
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Verification
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
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-[black] shadow-sm hover:bg-[#71EEFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify
              </button>
            </div>
            <div className="flex justify-between">
              <div className="text-sm">
                <Link
                  to="/fpwd"
                  className="font-semibold text-indigo-600 hover:text-indigo-600"
                >
                  Apply for TRCN?
                </Link>
              </div>
              <div className="text-sm">
                <Link
                  to="/signup"
                  className="font-semibold text-indigo-600 hover:text-indigo-600"
                >
                  Signup
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
