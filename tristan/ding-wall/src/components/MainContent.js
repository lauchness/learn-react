import React from 'react';
import './MainContent.css';
import ListSection from './ListSection';
import AsideBlurb from './AsideBlurb';
import RSCExplainer from './RSCExplainer';

function MainContent() {
  return (
    <main className="main-container">
      <AsideBlurb />
      <ListSection />
      <RSCExplainer />
    </main>
  );
}

export default MainContent;