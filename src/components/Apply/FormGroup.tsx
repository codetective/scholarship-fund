import React from 'react';

function FormGroup({ label, name, children }) {
  return (
    <div role='group' className='w-full mb-5'>
      <label className='pb-2 block' htmlFor={name}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormGroup;
