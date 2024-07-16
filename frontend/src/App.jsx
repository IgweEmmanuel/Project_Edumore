import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainWrapper from './layout/MainWrapper'
import PrivateRoute from './layout/PrivateRoute'
import Index from './views/base/Index'
// import Register from './views/auth/Register'
import Aboutb from './views/base/About'
import Contactb from './views/base/Contact'
import AboutP from './views/instructor/AboutPrivate'
import ContactP from './views/instructor/ContactPrivate'

import Login from './views/auth/Login'
import Register from './views/auth/Sinup'
import TeacherProfile from './views/instructor/Profile'
import Dashboard from './views/instructor/Dashboard'
import Ss1Eng from './views/instructor/notes/subjects/ss1note/ClassNoteEng'
import Ss1Bio from './views/instructor/notes/subjects/ss1note/ClassNoteBio'
import Ss1Chem from './views/instructor/notes/subjects/ss1note/ClassNoteChem'
import Ss1Comp from './views/instructor/notes/subjects/ss1note/ClassNoteComp'
import Ss1Econs from './views/instructor/notes/subjects/ss1note/ClassNoteEcons'
import Ss1Gov from './views/instructor/notes/subjects/ss1note/ClassNoteGov'
import Ss1Math from './views/instructor/notes/subjects/ss1note/ClassNoteMath'
import Ss1Phy from './views/instructor/notes/subjects/ss1note/ClassNotePhy'
import Ss2Eng from './views/instructor/notes/subjects/ss2note/ClassNoteEng'
import Ss2Bio from './views/instructor/notes/subjects/ss2note/ClassNoteBio'
import Ss2Chem from './views/instructor/notes/subjects/ss2note/ClassNoteChem'
import Ss2Comp from './views/instructor/notes/subjects/ss2note/ClassNoteComp'
import Ss2Econs from './views/instructor/notes/subjects/ss2note/ClassNoteEcons'
import Ss2Gov from './views/instructor/notes/subjects/ss2note/ClassNoteGov'
import Ss2Math from './views/instructor/notes/subjects/ss2note/ClassNoteMath'
import Ss2Phy from './views/instructor/notes/subjects/ss2note/ClassNotePhy'
import Ss3Eng from './views/instructor/notes/subjects/ss3note/ClassNoteEng'
import Ss3Bio from './views/instructor/notes/subjects/ss3note/ClassNoteBio'
import Ss3Chem from './views/instructor/notes/subjects/ss3note/ClassNoteChem'
import Ss3Comp from './views/instructor/notes/subjects/ss3note/ClassNoteComp'
import Ss3Econs from './views/instructor/notes/subjects/ss3note/ClassNoteEcons'
import Ss3Gov from './views/instructor/notes/subjects/ss3note/ClassNoteGov'
import Ss3Math from './views/instructor/notes/subjects/ss3note/ClassNoteMath'
import Ss3Phy from './views/instructor/notes/subjects/ss3note/ClassNotePhy'

import View from './views/instructor/View'

// import Verify from 'a./views/instructor/Verify'
import Logout from './views/auth/Logout'

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Aboutb />} />
          <Route path="/contact" element={<Contactb />} />
          {/* <Route path="/register/" element={<Register />} /> */}
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/logout/" element={<Logout />} />
          <Route element={<PrivateRoute />}>
            <Route path="/teacher/profile/" element={<TeacherProfile />} />
            <Route path="/teacher/dashboard" element={<Dashboard />} />
            <Route path="/teacher/dashboard/ss1eng" element={<Ss1Eng />} />
            <Route path="/teacher/dashboard/ss1bio" element={<Ss1Bio />} />
            <Route path="/teacher/dashboard/ss1chem" element={<Ss1Chem />} />
            <Route path="/teacher/dashboard/ss1comp" element={<Ss1Comp />} />
            <Route path="/teacher/dashboard/ss1econs" element={<Ss1Econs />} />
            <Route path="/teacher/dashboard/ss1gov" element={<Ss1Gov />} />
            <Route path="/teacher/dashboard/ss1math" element={<Ss1Math />} />
            <Route path="/teacher/dashboard/ss1phy" element={<Ss1Phy />} />
            {/* ss2 notes here */}
            <Route path="/teacher/dashboard/ss2eng" element={<Ss2Eng />} />
            <Route path="/teacher/dashboard/ss2bio" element={<Ss2Bio />} />
            <Route path="/teacher/dashboard/ss2chem" element={<Ss2Chem />} />
            <Route path="/teacher/dashboard/ss2comp" element={<Ss2Comp />} />
            <Route path="/teacher/dashboard/ss2econs" element={<Ss2Econs />} />
            <Route path="/teacher/dashboard/ss2gov" element={<Ss2Gov />} />
            <Route path="/teacher/dashboard/ss2math" element={<Ss2Math />} />
            <Route path="/teacher/dashboard/ss2phy" element={<Ss2Phy />} />
            {/* ss2 notes here */}
            <Route path="/teacher/dashboard/ss3eng" element={<Ss3Eng />} />
            <Route path="/teacher/dashboard/ss3bio" element={<Ss3Bio />} />
            <Route path="/teacher/dashboard/ss3chem" element={<Ss3Chem />} />
            <Route path="/teacher/dashboard/ss3comp" element={<Ss3Comp />} />
            <Route path="/teacher/dashboard/ss3econs" element={<Ss3Econs />} />
            <Route path="/teacher/dashboard/ss3gov" element={<Ss3Gov />} />
            <Route path="/teacher/dashboard/ss3math" element={<Ss3Math />} />
            <Route path="/teacher/dashboard/ss3phy" element={<Ss3Phy />} />
            <Route path="/abouts" element={<AboutP />} />
            <Route path="/contacts" element={<ContactP />} />

            <Route path="/home" element={<View />} />
          </Route>
          {/* <Route path="/login/verify/" element={<TeacherProfile />} /> */}
          {/* <Route path="/logout/" element={<Logout />} /> */}
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  )
}
export default App
