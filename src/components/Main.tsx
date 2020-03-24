import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Landing from './Landing';
import Contact from './Contact';
import Projects from './Projects';
import Experience from "./WorkExperience";

export default function Main() {
  return (
    <Switch>
      <Route exact path='/' component={ Landing } />
      <Route path='/about' component={ About } />
      <Route path='/experience' component={ Experience } />
      <Route path='/projects' component={ Projects } />
      <Route path='/contact' component={ Contact } />
    </Switch>
  );
}
