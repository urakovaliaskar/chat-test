import React from 'react';
import Badge from '../Badge';

const MenuImage = ({image, count, ...rest}) => {
  return (
    <div className="menu-image" {...rest}>
      <img src={image} alt="" />
      <Badge value={count} />
    </div>
  );
}

export default MenuImage;
