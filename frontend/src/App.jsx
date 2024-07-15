import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainWrapper from './layout/MainWrapper'
import PrivateRoute from './layout/PrivateRoute'
import Index from './views/base/Index'
// import View from './views/instructor/View'
// import Register from './views/auth/Register'
import Login from './views/auth/Login'
import Register from './views/auth/Sinup'
import TeacherProfile from './views/instructor/Profile'
import Dashboard from './views/instructor/Dashboard'
import Week from './views/instructor/notes/biology/Weeks'
// import Verify from './views/instructor/Verify'
import Logout from './views/auth/Logout'

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/register/" element={<Register />} /> */}
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/logout/" element={<Logout />} />
          <Route element={<PrivateRoute />}>
            <Route path="/teacher/profile/" element={<TeacherProfile />} />
            <Route path="/teacher/dashboard" element={<Dashboard />} />
            <Route path="/teacher/dashboard/week" element={<Week />} />
            {/* <Route path="" element={<View />} /> */}
          </Route>
          {/* <Route path="/login/verify/" element={<TeacherProfile />} /> */}
          {/* <Route path="/logout/" element={<Logout />} /> */}
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  )
}
export default App
