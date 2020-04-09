import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import HomePage from './HomePage/HomePage';
import ProjectPage from './ProjectsPage/ProjectsPage';
import WorkPage from './WorkPage/WorkPage';
import NavBar from './NavBar/NavBar';

const { Header, Content } = Layout

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      pageView: 'homePage'
    }
  }


  render() {

    const gradientStyle = {
      background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)'
    }


    return (
      <div className="App">
        <Layout style={gradientStyle}>
          <Content>
            <NavBar />
            <scroll-container>
              <scroll-page id="home">
                <HomePage />
              </scroll-page>
              <scroll-page id="projects">
                <ProjectPage />
              </scroll-page>
              <scroll-page id="work-experience">
                <WorkPage />
              </scroll-page>
            </scroll-container>
          </Content>
        </Layout>
      </div >
    )
  }
}

export default App;
