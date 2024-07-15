// importing packages
import Header from './headfoot/Header'
// import Navbar from './Navbar'
import { DashContent } from './DashContent'

export default function Dashboard() {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <div className="pt-20">
        <DashContent />
      </div>
    </div>
  )
}
