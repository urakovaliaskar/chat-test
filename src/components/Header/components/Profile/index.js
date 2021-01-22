import React from 'react';
import Avatar from '../../../Avatar';
import Username from '../Username'

const Profile = () => {

  const currentUser = 'Валерий Алексеев'
  return (
    <div className="profile">
      <Avatar name={currentUser} width={38} bordered fontSize={16} />
      <Username name={currentUser} />
    </div>
  );
}

export default Profile;
