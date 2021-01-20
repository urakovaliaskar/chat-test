import React from "react";
import arrow from "../../../../assets/images/arrow-drop-down-line.svg";

const Username = ({ name }) => {
	return (
		<div className="profile__username">
			<div className="profile__username__text">
				<span className="profile__username__text__name">{name}</span>
				<br />
				<span className="profile__username__text__company">Веб-студия #VA</span>
			</div>
			<img src={arrow} alt="" />
		</div>
	);
};

export default Username;
