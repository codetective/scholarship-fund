import React from 'react';
import Table from '../../atoms/Table/Table';
import THead from '../../atoms/Table/THead';
import TBody from '../../atoms/Table/TBody';
import { useData } from '../../contexts/AdminDataContext';

function UnreviviewedApplications() {
  const { data } = useData();
  return (
    <div className='py-10'>
      <div className='p-4 bg-gray-50 rounded-xl'>
        <h3 className='font-bold text-xl text-gray-800 leading-none'>
          Pending Reviews
        </h3>
      </div>
      <div className='text-xs py-3'>
        Applications submitted for reviews listed in order of submission, click
        for details :
      </div>
      <Table>
        <THead>
          <th scope='col' className='px-6 py-4'>
            #
          </th>
          <th scope='col' className='px-6 py-4'>
            Name
          </th>
          <th scope='col' className='px-6 py-4'>
            Gender
          </th>
          <th scope='col' className='px-6 py-4'>
            LGA
          </th>
          <th scope='col' className='px-6 py-4'>
            Programme
          </th>
          <th scope='col' className='px-6 py-4'>
            Course
          </th>
          <th scope='col' className='px-6 py-4'>
            DOB
          </th>
        </THead>
        <TBody>
          {data?.first_unreviewed.map((d, i) => {
            return (
              <tr
                key={d.id}
                className='border-b hover:bg-gray-50 cursor-pointer dark:border-neutral-500'
              >
                <td className='whitespace-nowrap px-6 py-4 font-medium'>
                  {i + 1}
                </td>
                <td className='whitespace-nowrap px-6 py-4'>{d.name}</td>
                <td className='whitespace-nowrap px-6 py-4'>{d.gender}</td>
                <td className='whitespace-nowrap px-6 py-4'>{d.lga}</td>
                <td className='whitespace-nowrap px-6 py-4'>
                  {d.programme_of_study}
                </td>
                <td className='whitespace-nowrap px-6 py-4'>
                  {d.course_of_study}
                </td>
                <td className='whitespace-nowrap px-6 py-4'>{d.dob}</td>
              </tr>
            );
          })}
        </TBody>
      </Table>
    </div>
  );
}

export default UnreviviewedApplications;
