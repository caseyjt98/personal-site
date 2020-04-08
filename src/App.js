import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import HomePage from './HomePage/HomePage.tsx'
import ProjectPage from './ProjectsPage/ProjectsPage.tsx'
import WorkPage from './WorkPage/WorkPage.tsx'

const { Header, Content } = Layout

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: 'homePage'
    }
  }

  displayHomePage = () => {
    console.log("home page clicked")
    this.setState({ pageView: 'homePage' })
  }

  displayProjectPage = () => {
    console.log("project page clicked")
    this.setState({ pageView: 'projectPage' })
  }

  displayWorkPage = () => {
    console.log("work page clicked")
    this.setState({ pageView: 'workPage' })
  }

  render() {

    let currentPage

    switch (this.state.pageView) {
      case 'homePage':
        currentPage = (
          <HomePage />
        )
        break
      case 'projectPage':
        currentPage = (
          <ProjectPage />
        )
        break
      case 'workPage':
        currentPage = (
          <WorkPage />
        )
        break
      default:
        currentPage = <div>No Content</div>
    }


    return (
      <div className="App">
        <Layout className="layout" >

          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={this.displayHomePage}> Home </Menu.Item>
              <Menu.Item key="2" onClick={this.displayProjectPage}> Projects </Menu.Item>
              <Menu.Item key="3" onClick={this.displayWorkPage}> Work Experience </Menu.Item>
            </Menu>
          </Header>

          <Content>
            {currentPage}
          </Content>

        </Layout>

      </div >
    )
  }
}

export default App;
