import React from 'react';
import './MainContent.css';
import ListSection from './ListSection';
import AsideBlurb from './AsideBlurb';
import TodoFilter from './TodoFilter';

function MainContent() {
  return (
    <main className="main-container">
      <AsideBlurb />
      <TodoFilter />
      <ListSection />
    </main>
  );
}

export default MainContent;