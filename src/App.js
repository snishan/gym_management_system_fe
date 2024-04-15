import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { Toaster } from 'react-hot-toast';
import SignupPage from "./pages/SignupPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={"home"} path="/" element={<HomePage />}/>
        <Route key={"signup"} path="/signup" element={<SignupPage />}/>
        <Route path="*" element={<ErrorPage />} />
      
      </Routes>
      <Toaster position="top-right"/>
    </BrowserRouter>
  );
}



