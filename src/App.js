import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { Toaster } from 'react-hot-toast';
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";
import MemberPage from "./pages/MemberPage";
import TrainerPage from './pages/TrainerPage';
import StockManagerPage from "./pages/StockManager";
import AdminPage from "./pages/AdminPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={"home"} path="/" element={<HomePage />}/>
        <Route key={"signup"} path="/signup" element={<SignupPage />}/>
        <Route key={"signin"} path="/signin" element={<SignInPage />}/>
        <Route key={"member"} path="/member" element={<MemberPage />}/>
        <Route key={"trainer"} path="/trainer" element={<TrainerPage />}/>
        <Route key={"stockManager"} path="/stockManager" element={<StockManagerPage />}/>
        <Route key={"adminPage"} path="/admin" element={<AdminPage />}/>
        <Route path="*" element={<ErrorPage />} />
      
      </Routes>
      <Toaster position="top-right"/>
    </BrowserRouter>
  );
}



