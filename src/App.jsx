import React from 'react';

import './css/common/reset.css';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">Body</main>
      <footer className="app-footer">Footer</footer>
    </div>
  );
}

function Header() {
  return (
    <header className="app-header">
      <section className="header-logo">header</section>
      <section className="header-center" />
      <section className="header-account" />
    </header>
  );
}

export default App;
