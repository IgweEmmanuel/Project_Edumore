import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import MainWrapper from './layout/MainWrapper'
// import PrivateRoute from './layouts/PrivateRoute'
import Index from './views/base/Index'
// import Register from './views/auth/Register'
import Login from './views/auth/Login'
import Signup from './views/auth/Sinup'
import TeacherProfile from './views/instructor/Profile'
// import Logout from './views/auth/Logout'

function App() {
  return (
    <BrowserRouter>
      {/* <MainWrapper> */}
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/register/" element={<Register />} /> */}
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/teacher/profile/" element={<TeacherProfile />} />
        {/* <Route path="/logout/" element={<Logout />} /> */}
      </Routes>
      {/* </MainWrapper> */}
    </BrowserRouter>
  )
}
export default App
