import React from "react";
import Avatar from "../../../Avatar";
import arrow from "../../../../assets/images/arrow-down-line.svg";

const Menu = ({ menus }) => {
	const { departments, last } = menus;

	const handleMenuItemClick = (e) => {
		if (e.currentTarget.className.includes(" active")) {
			e.currentTarget.className = e.currentTarget.className.replace(
				" active",
				""
			);
		} else {
			e.currentTarget.className += " active";
		}

		if (e.currentTarget.children && e.currentTarget.children[0].children[2]) {
			if (
				e.currentTarget.children[0].children[2].className.includes("-active")
			) {
				e.currentTarget.children[0].children[2].className = e.currentTarget.children[0].children[2].className.replace(
					"-active",
					""
				);
			} else {
				e.currentTarget.children[0].children[2].className += "-active";
			}
		}
	};

	return (
		<div className="sidebar__menu">
			<span className="sidebar__menu__title">Отделы</span>
			<ul className="sidebar__menu__list">
				{departments &&
					departments.map((department) => {
						return (
							<li
								className="sidebar__menu__list__item"
								onClick={handleMenuItemClick}
							>
								<div>
									<Avatar
										name={department.title}
										width={23}
										bordered={false}
										fontSize={11}
									/>
									<span className="sidebar__menu__list__item__text">
										{department.title}
									</span>
									{department.children && (
										<img
											src={arrow}
											className="sidebar__menu__arrow"
											alt=""
										></img>
									)}
								</div>
								{department.children && (
									<ul
										className="sidebar__menu__list__item__children"
										onClick={(e) => e.stopPropagation()}
									>
										{department.children.map((el) => (
											<li className="sidebar__menu__list__item__children__item">
												<Avatar
													name={el}
													width={23}
													bordered={false}
													fontSize={9}
												/>
												<span className="sidebar__menu__list__item__children__item__text">
													{el}
												</span>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
			</ul>
			<span className="sidebar__menu__title">Последние чаты</span>
			<ul className="sidebar__menu__list">
				{last &&
					last.map((item) => {
						return (
							<li className="sidebar__menu__list__item">
								<div>
									<Avatar
										name={item.title}
										width={23}
										bordered={false}
										fontSize={9}
									/>
									<span className="sidebar__menu__list__item__text">
										{item.title}
									</span>
								</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Menu;
