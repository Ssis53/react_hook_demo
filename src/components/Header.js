import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

const Header = (props) => {
  const pathName = window.location.pathname;
  return (
    <React.Fragment>
      <Menu mode="horizontal" defaultSelectedKeys={[pathName]}>
        <Menu.Item key="/home">
          <Link to="/home">
            首页
            </Link>
        </Menu.Item>
        <Menu.Item key="/detail">
          <Link to="/detail">
            详情
            </Link>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}

export default Header;