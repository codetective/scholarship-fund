import React from 'react';

function ApplicationStats({ received, reviewed }) {
  return (
    <div className='flex items-center gap-5 md:flex-row flex-col'>
      <div className='p-4 bg-orange-100 rounded-xl text-gray-800 w-full'>
        <div className='heading-font font-bold text-2xl leading-none'>
          {received}
        </div>
        <div className='mt-2'>Applications received</div>
      </div>
      <div className='p-4 bg-orange-100 rounded-xl text-gray-800 w-full'>
        <div className='heading-font font-bold text-2xl leading-none'>
          {reviewed}
        </div>
        <div className='mt-2'>Applications reviewed</div>
      </div>
    </div>
  );
}

export default ApplicationStats;
