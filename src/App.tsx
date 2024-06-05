// import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Signin } from "./pages/Signin.tsx";
import Onboard from "./pages/Onboard.tsx";
import Menu from "./pages/Menu.tsx";
import { Friends } from "./pages/Friends.tsx";
import { Message } from "./pages/Message.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Notification } from "./pages/Notification.tsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<Onboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages" element={<Message />} />
      </Route>
    )
  );

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
