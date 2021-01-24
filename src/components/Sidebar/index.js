import React from "react";
import Search from "./components/Search";
import Menu from "./components/Menu";

const menus = {
	departments: [
		{
			title: "Руководство",
		},
		{
			title: "Бухгалтерия",
		},
		{
			title: "Маркетинг",
		},
		{
			title: "Аналитика",
		},
		{
			title: "Разработка и интеграция",
			children: [
				"Валерий Алексеев",
				"Алексей Мусаханов",
				"Юлия Дворецкова",
				"Софья Загидулина",
				"Артём Гавриленко",
			],
		},
	],
	last: [
		{
			title: "Константин Филатов",
		},
		{
			title: "Юлия Дворецкова",
		},
		{
			title: "Алина Богданова",
		},
	],
};

const Sidebar = () => {
	const [search, setSearch] = React.useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const processedMenus = {
		departments: menus.departments.map((d) => {
			if (d.children && search) {
				return {
					...d,
					children: d.children.filter((c) =>
						c.toLocaleLowerCase().includes(search.toLocaleLowerCase())
					),
				};
			}
			return d;
		}),
		last: menus.last.filter((l) => l.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		),
	};

	return (
		<div className="sidebar">
			<Search onSearch={handleSearch} search={search} />
			<Menu menus={processedMenus} />
		</div>
	);
};

export default Sidebar;
