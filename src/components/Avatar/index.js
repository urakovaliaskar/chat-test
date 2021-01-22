import React from "react";

const Avatar = ({ name, width, bordered, fontSize }) => {
	let abbr = name
		.split(" ")
		.map((name) => {
			return name.charAt(0).toUpperCase();
		})
		.join("");
	if (abbr.length > 2) abbr = abbr.charAt(0);

	let style = {
		width: "fit-content",
		height: "fit-content",
	};
	if (width) {
		style.width = `${width}px`;
    style.height = `${width}px`;
  }
  if(fontSize) {
    style.fontSize = `${fontSize}px`;
    style.lineHeight = `${fontSize+4}px`;
	}
	if (bordered) {
		style.border = "2px solid #ffffff33";
	}

	return (
		<div className="profile__avatar" style={style}>
			{abbr}
		</div>
	);
};

export default Avatar;
