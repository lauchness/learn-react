import React from 'react';
import './MainContent.css';
import ListSection from './ListSection';
import AsideBlurb from './AsideBlurb';

function MainContent() {
  return (
    <main className="main-container">
      <AsideBlurb />  
      <ListSection />  
    </main>
  );
}

export default MainContent;
