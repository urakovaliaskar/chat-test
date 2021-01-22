import React from "react";
import Avatar from "../../../Avatar";

const Menu = ({ menus }) => {
	const { departments, last } = menus;

	return (
		<div className="sidebar__menu">
			<span className="sidebar__menu__title">Отделы</span>
			<ul className="sidebar__menu__list">
				{departments.map((department) => {
					return (
						<li>
							<Avatar
								name={department.title}
								width={23}
								bordered={false}
								fontSize={11}
							/>
							{department.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Menu;
