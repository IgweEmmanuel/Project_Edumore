import { userAuthStore } from '../store/auth'
import axios from './axios'
import jwt_decode from 'jwt-decode'
import Cookie from 'js-cookie'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Swal from 'sweetalert2'

export const login = async (email, password) => {
  try {
    const { data, status } = await axios.post('user/token/', {
      email,
      password,
    })
    if (status == 200) {
      setAuthUser(data.access, data.refresh)
      //   alert('Login Successful!')
    }
    return {
      data,
      error: null,
    }
  } catch (error) {
    console.error(error.message)
    // return {
    //   data: null,
    //   error: error.response.data?.detail || 'Something error!',
    // }
    toast.error('Failed to login, Wrong Credentials!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    })
  }
}

export const register = async (full_name, email, password, password2) => {
  try {
    const { data, status } = await axios.post('user/register/', {
      full_name,
      email,
      password,
      password2,
    })
    if (status == 201) {
      console.log('User created successfully!')
    }
    await login(email, password)
    // alert('User created successfully!')
    return {
      data,
      error: null,
    }
  } catch (error) {
    console.log(error)
    // return {
    //   datat: null,
    //   error:
    //         `${error.response.data.full_name} - ${error.response.data.email}` ||
    //         'Something went wrong!',
    // }
    toast.error('Failed to Register, Use correct detail', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    })
  }
}

export const logout = () => {
  Cookie.remove('access_token')
  Cookie.remove('refresh_token')
  Cookie.remove('csrftoken')
  Cookie.remove('sessionid')
  userAuthStore.getState().setUser(null)
  //   alert('You have been logged out!')
}

export const setUser = () => {
  const access_token = Cookie.get('access_token')
  const refresh_token = Cookie.get('refresh_token')
  if (!access_token || !refresh_token) {
    // alert('Token does not exist!')
    return
  }
  if (isAccessTokenExpired(access_token)) {
    const response = getRefreshedToken(refresh_token)
    setAuthUser(response.access, response.refresh)
  } else {
    setAuthUser(access_token, refresh_token)
  }
}

const setAuthUser = (access_token, refresh_token) => {
  Cookie.set('access_token', access_token, {
    expires: 1,
    secure: true,
  })
  Cookie.set('refresh_token', refresh_token, {
    expires: 7,
    secure: true,
  })
  const user = jwt_decode(access_token) ?? null
  if (user) {
    userAuthStore.getState().setUser(user)
  } else {
    userAuthStore.getState().setLoading(false)
  }
}

const getRefreshedToken = async () => {
  try {
    const refresh_token = Cookie.get('refresh_token')
    const response = await axios.post('token/refresh/', {
      refresh: refresh_token,
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const isAccessTokenExpired = (access_token) => {
  try {
    const decodedToken = jwt_decode(access_token)
    return decodedToken.exp < Date.now() / 1000
  } catch (error) {
    console.log(error)
    return true
  }
}
