import React from "react";
import classnames from "classnames";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import MenuImage from "./components/MenuImage";
import message from "../../assets/images/message-2-line.svg";
import notification from "../../assets/images/notification-2-line.svg";

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<Menu />
			<div className="right-content">
				<MenuImage
					image={message}
					count={4}
					className={classnames("menu-image", "message")}
				/>
				<MenuImage
					image={notification}
					count={32}
					className={classnames("menu-image", "notification")}
				/>
        <Profile />
			</div>
		</header>
	);
};

export default Header;
