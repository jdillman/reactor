import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'css/common/reset.css';
import 'css/App.css';

function Home() {
  return 'Home';
}

function About() {
  return 'Resume';
}

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
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
