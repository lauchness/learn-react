import React from 'react';
import './MainContent.css';
import ListSection from './ListSection';
import AsideBlurb from './AsideBlurb';

function MainContent() {
  return (
    <div className="main-container">
      <main>
        <AsideBlurb />  
        <ListSection />  
      </main>
    </div>
  );
}

export default MainContent;