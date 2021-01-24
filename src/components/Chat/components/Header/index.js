import React from "react";
import Avatar from "../../../Avatar";
import settings from '../../../../assets/images/settings-4-line.svg'
import search from '../../../../assets/images/search-line-2.svg'

const Header = () => {
	return (
		<header className="chat__header">
			<div className="chat__header__avatar">
				<Avatar name="Общий чат" width={40} fontSize={16} />
			</div>
			<div className="chat__header__title">
        <span>Общий чат</span>
        <span>12 участников</span>
      </div>
      <img src={search} alt="Пойск" className="chat__header__search" />
      <img src={settings} alt="Настройки" className="chat__header__settings" />
		</header>
	);
};

export default Header;
