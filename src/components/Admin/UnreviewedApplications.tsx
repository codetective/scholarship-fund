import React from 'react';
import Table from '../../atoms/Table/Table';
import THead from '../../atoms/Table/THead';
import TBody from '../../atoms/Table/TBody';

function UnreviviewedApplications() {
  return (
    <div className='py-10'>
      <div className='p-4 bg-gray-50 rounded-xl'>
        <h3 className='font-bold text-xl text-gray-800 leading-none'>
          Pending Reviews
        </h3>
      </div>
      <div className='text-xs py-3'>
        Applications submitted for reviews listed in order of submission :
      </div>
      <Table>
        <THead>
          <th scope='col' className='px-6 py-4'>
            #
          </th>
          <th scope='col' className='px-6 py-4'>
            Heading
          </th>
          <th scope='col' className='px-6 py-4'>
            Heading
          </th>
          <th scope='col' className='px-6 py-4'>
            Heading
          </th>
          <th scope='col' className='px-6 py-4'>
            Heading
          </th>
        </THead>
        <TBody>
          <tr className='border-b dark:border-neutral-500'>
            <td className='whitespace-nowrap px-6 py-4 font-medium'>1</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
          </tr>
          <tr className='border-b dark:border-neutral-500'>
            <td className='whitespace-nowrap px-6 py-4 font-medium '>2</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
          </tr>
          <tr className='border-b '>
            <td className='whitespace-nowrap px-6 py-4 font-medium '>3</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
            <td className='whitespace-nowrap px-6 py-4'>Cell</td>
          </tr>
        </TBody>
      </Table>
    </div>
  );
}

export default UnreviviewedApplications;
