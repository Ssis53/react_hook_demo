import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  render() {
    return (
      <React.Fragment>
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link to="/home">
              首页
            </Link>
          </Menu.Item>
          <Menu.Item key="detail">
            <Link to="/detail">
              详情
            </Link>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    )
  }
}

export default Header;