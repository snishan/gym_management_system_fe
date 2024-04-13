import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={"home"} path="/" element={<HomePage />}/>
        <Route path="*" element={<ErrorPage />} />
      
      </Routes>
      <Toaster position="top-right"/>
    </BrowserRouter>
  );
}



