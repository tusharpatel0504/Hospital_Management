import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAppointments from "./pages/admin/AdminAppointments";
import AddDoctor from "./pages/admin/AddDoctor";
import DoctorList from "./pages/admin/DoctorList";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorProfile from "./pages/doctor/DoctorProfile";


const App = () => {
  const aToken = true;
  const dToken = false;

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route path='/all-appointments' element={<AdminAppointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
           <Route path='/doctor-list' element={<DoctorList/>}/>
           <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
           <Route path='/doctor-appointments' element={<DoctorAppointments/>}/>
            <Route path='/doctor-profile' element={<DoctorProfile/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;