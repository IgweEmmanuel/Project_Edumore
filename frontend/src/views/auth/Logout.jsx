import { useEffect } from 'react'
import { logout } from '../../utils/auth'
import Login from './Login'

function Logout() {
  useEffect(() => {
    logout()
  }, [])
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     const { error } = logout()
  //     if (error) {
  //       alert(error)
  //     } else {
  //       navigate('/home')
  //     }
  //   }

  //   const toRegister = () => {
  //     navigate('/register')
  //   }
  //   const toLogin = () => {
  //     navigate('/login/')
  //   }
  return (
    <>
      <Login />
    </>
  )
}

export default Logout
