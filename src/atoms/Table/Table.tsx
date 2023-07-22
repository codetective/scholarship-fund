import React from 'react';

function Table({ children }) {
  return (
    <div className='flex flex-col overflow-x-auto'>
      <div className='sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-x-auto'>
            <table className='min-w-full text-left text-sm font-light'>
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
