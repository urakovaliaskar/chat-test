import React from "react";
import arrow from "../../../../assets/images/arrow-drop-down-line.svg";

const Username = ({ name }) => {
	const [firstName, lastName] = name.split(" ");
	return (
		<div className="profile__username">
			<div className="profile__username__text">
				<span className="profile__username__text__name">
					{firstName} {lastName.charAt(0)}.
				</span>
				<br />
				<span className="profile__username__text__company">Веб-студия #VA</span>
			</div>
			<img src={arrow} alt="" />
		</div>
	);
};

export default Username;
