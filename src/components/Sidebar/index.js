import React from 'react';
import Search from './components/Search';
import Menu from './components/Menu';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <Menu />
    </div>
  );
}

export default Sidebar;
