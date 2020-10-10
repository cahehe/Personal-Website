import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
// import Test from './components/test'

function App() {
  // if(window.location.pathname === '/test') return <Test/>;

  return (
    // {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header className = 'header-color' title={<Link style = {{textDecoration: 'none', color: 'white'}} to = '/'>Carlos He He's Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}                
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style = {{textDecoration: 'none', color: 'black'}} to = '/'>Carlos He He's Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>                
                {/* <Link to="/aboutme">About Me</Link> */}                
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
