import React from 'react';

function THead({ children }) {
  return (
    <thead className='border-b font-medium dark:border-neutral-500'>
      <tr>{children}</tr>
    </thead>
  );
}

export default THead;
