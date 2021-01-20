import React from "react";
import classnames from "classnames";

const menu = ["Команда", "Задачи", "Календарь"];

const Menu = () => {
	return (
		<nav className="menu">
			{menu.map((item, index) => (
				<div
					className={classnames(
						"menu__item",
						index === 0 ? "menu__item-active" : ""
					)}
				>
					{item}
				</div>
			))}
		</nav>
	);
};

export default Menu;
