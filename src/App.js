import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { Toaster } from 'react-hot-toast';
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";
import MemberPage from "./pages/MemberPage";
import TrainerPage from './pages/TrainerPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={"home"} path="/" element={<HomePage />}/>
        <Route key={"signup"} path="/signup" element={<SignupPage />}/>
        <Route key={"signin"} path="/signin" element={<SignInPage />}/>
        <Route key={"member"} path="/member" element={<MemberPage />}/>
        <Route key={"trainer"} path="/trainer" element={<TrainerPage />}/>
        <Route path="*" element={<ErrorPage />} />
      
      </Routes>
      <Toaster position="top-right"/>
    </BrowserRouter>
  );
}



