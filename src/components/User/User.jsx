import React from 'react';
import { useParams } from 'react-router-dom'; 

function User() {
  const { userid } = useParams(); // useParams is a hook that allows you to access the URL parameters

  return <div className='bg-gray-600 text-white text-3xt p-4'>User: {userid}</div>;
}

export default User; //
