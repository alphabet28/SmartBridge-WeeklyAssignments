import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import TextUpdater from "./components/TextUpdater";
import InputForm from "./components/InputForm";
import UserCard from "./components/UserCard";
import BlueButton from "./components/BlueButton";
import LoginForm from "./components/LoginForm";
import UserCardContainer from "./components/UserCardContainer";

function App() {
  return (
    <div className="p-6 space-y-8">
      <TextUpdater />
      <InputForm />
      <div className="p-6">
      <UserCardContainer />
    </div>
      <BlueButton />
      <LoginForm />
    </div>
  );
}

export default App;