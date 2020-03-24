import React from 'react';
import {
  Layout, Drawer, Navigation, Content, Header,
} from 'react-mdl';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './components/Main';

function App() {
  const ABOUT = 'About';
  const WORK_EXPERIENCE = 'Work Experience';
  const PROJECTS = 'Projects';
  const CONTACT_ME = 'Contact';
  const RESUME = 'Resume';

  const WEB_NAV = (
    <Navigation>
      <Link to='/about'>{ABOUT}</Link>
      <Link to='/experience'>{WORK_EXPERIENCE}</Link>
      <Link to='/projects'>{PROJECTS}</Link>
      <Link to='/contact'>{CONTACT_ME}</Link>
      <Link to='#'>{RESUME}</Link>
    </Navigation>
  );

  return (
    <div className='App'>
      <div className='demo-big-content'>
        <Layout>
          <Header className={'header-color'} title='Eddy Li' scroll>
            { WEB_NAV }
          </Header>
          <Drawer title='Title'>
            { WEB_NAV }
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
