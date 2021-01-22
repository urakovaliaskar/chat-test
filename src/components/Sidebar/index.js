import React from "react";
import Search from "./components/Search";
import Menu from "./components/Menu";

const menus = {
  departments: [
    {
      title: "Руководство"
    },
    {
      title: "Бухгалтерия"
    },
    {
      title: "Маркетинг"
    },
    {
      title: "Аналитика"
    },
    {
      title: "Разработка и интеграция",
      children: [
        "Валерий Алексеев",
        "Алексей Мусаханов",
        "Юлия Дворецкова",
        "Софья Загидулина",
        "Артём Гавриленко"
      ]
    },
  ],
  last: [
    {
      title: "Константин Филатов",
    },
    {
      title: "Юлия Дворецкова"
    }
  ]
}

const Sidebar = () => {
	const [search, setSearch] = React.useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
  };
  
	return (
		<div className="sidebar">
			<Search onSearch={handleSearch} search={search} />
			<Menu menus={menus} />
		</div>
	);
};

export default Sidebar;
