import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <Header menu={isOpen} open={openMenu}/>
    <main className=' relative max-w-5xl'>
      <Sidebar menu={isOpen} open={openMenu}/>
      <Buttons/> 
    </main>
    <Footer/>
    </>
  );
}

export default App;
