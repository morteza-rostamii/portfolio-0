//import logo from './logo.svg';

import { Route, Routes } from "react-router-dom";
import MainLay from "./layouts/MainLay";
import MadLibsPage from "./pages/mad-libs/MadLibsPage";
import HomePage from "./pages/home/HomePage";
import NumGuessGame from "./pages/number-guess/NumGuessGame";
import ChatUi from "./pages/chat-ui/ChatUi";
import ChatUiPage from "./pages/chat-ui/ChatUiPage";
import PinterestPage from "./pages/pinterest/PinterestPage";
import { useEffect, useState } from "react";
import PreLoader from "./pages/home/components/PreLoader";

import {GiFallingBlob} from 'react-icons/gi'

import com from './assets/com.gif'

function App() {

  return (
    <Routes>
      <Route
      //path="/"
      element={<MainLay/>}
      >
        <Route
        exact
        path="/"
        element={<HomePage/>}
        >
        </Route>
      </Route>
      
      {/* mad libs game */}
      <Route
      path="/mad-libs"
      element={<MadLibsPage/>}
      >
      </Route>

      {/* number guess */}
      <Route
      path="/num-guess-game"
      element={<NumGuessGame/>}
      >
      </Route>

      {/* chat ui */}
      <Route
      path="/chat-ui"
      element={<ChatUiPage/>}
      >
      </Route>

      {/* pintrest */}
      <Route
      path="/pinterest"
      element={<PinterestPage/>}
      >
      </Route>
    </Routes>
  );
}

export default App;
