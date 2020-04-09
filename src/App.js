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

  // displayHomePage = () => {
  //   this.setState({ pageView: 'homePage' })
  // }

  // displayProjectPage = () => {
  //   console.log("display project page called")
  //   this.setState({ pageView: 'projectPage' })
  // }

  // displayWorkPage = () => {
  //   this.setState({ pageView: 'workPage' })
  // }

  render() {

    const gradientStyle = {
      background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)'
    }


    // let currentPage

    // switch (this.state.pageView) {
    //   case 'homePage':
    //     currentPage = (
    //       <div>
    //         <HomePage />
    //       </div>
    //     )
    //     break
    //   case 'projectPage':
    //     currentPage = (
    //       <div>

    //         <ProjectPage />
    //       </div>
    //     )
    //     break
    //   case 'workPage':
    //     currentPage = (
    //       <div>

    //         <WorkPage />
    //       </div>
    //     )
    //     break
    //   default:
    //     currentPage = <div>No Content</div>
    // }


    return (
      <div className="App">

        <Layout style={gradientStyle}>

          {/* <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={this.displayHomePage}> Home </Menu.Item>
              <Menu.Item key="2" onClick={this.displayProjectPage}> Projects </Menu.Item>
              <Menu.Item key="3" onClick={this.displayWorkPage}> Work Experience </Menu.Item>
            </Menu>
          </Header> */}

          <Content>
            {/* <nav className="navbar">
              <a href="#page-1">1</a>
              <a href="#page-2">2</a>
              <a href="#page-3">3</a>
            </nav> */}
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
            {/* {currentPage}  */}

          </Content>
        </Layout>


      </div >
    )
  }
}

export default App;
