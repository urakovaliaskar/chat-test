import React from "react";
import logo from "../../../../assets/images/logo.png";

const Logo = () => {
	return (
		<div className="logo">
			<div className="logo__image">
				<img src={logo} alt="LOGO" />
			</div>
			<div className="logo__title">logo</div>
		</div>
	);
};

export default Logo;
