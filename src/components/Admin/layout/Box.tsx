import React from 'react';

function Box({ children }) {
  return <div className='bg-white rounded-3xl md:p-8 p-3 mb-5'>{children}</div>;
}

export default Box;
