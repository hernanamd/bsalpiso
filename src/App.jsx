import React from 'react'
import { Link, Route } from "wouter";

// VIEWS
import Home from './views/Home'
import Server from './views/Server';
import Vip from './views/Vip';

//COMPONENTS
import Logo from './components/Logo'
import Menu from './components/Menu'
import MenuMobile from './components/MenuMobile';

function App() {

  return (
    <div className='flex flex-wrap lg:px-10 justify-center'>
      <Logo />
      <Menu />
      <MenuMobile />
      <Route path="/" component={Home} />
      <Route path="/server" component={Server} />
      <Route path="/vip" component={Vip} />
    </div>
  )
}

export default App