import React, { useState } from 'react';
import $ from 'jquery';
import Navbar from './Navbar';
import HomeContent from './HomeContent';
import BusinessContent from './BusinessContent';

import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [activeContent, setActiveContent] = useState('home');

  const handleClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
      <ToastContainer
        icon={false}
        closeButton={false}
        progressClassName="toastProgress prevent-select"
        bodyClassName="toastBody"
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        toastStyle={{ background: "transparent" }}
      />
      <Navbar handleClick={handleClick} activeContent={activeContent} />
      {activeContent === 'home' ? <HomeContent /> : <BusinessContent />}
    </div>
  );
};

export default App;
