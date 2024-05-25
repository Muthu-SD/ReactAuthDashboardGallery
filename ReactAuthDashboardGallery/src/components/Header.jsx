import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext.jsx';
import { Switch, Dropdown, Menu } from 'antd';

const Header = () => {
  const { toggleTheme, toggleLanguage } = useContext(SettingsContext);

  const languageMenu = (
    <Menu onClick={toggleLanguage}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="es">Spanish</Menu.Item>
    </Menu>
  );

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#f0f2f5' }}>
      <div>
        <Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={toggleTheme} />
      </div>
      <Dropdown overlay={languageMenu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Language
        </a>
      </Dropdown>
    </header>
  );
};

export default Header;
