import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Box from './Box';
import UnreviviewedApplications from '../UnreviewedApplications';
import Greeting from '../Greeting';
import ApplicationStats from '../ApplicationStats';
import ContainerWrap from '../../../atoms/ContainerWrap';

function AdminLayout() {
  const [sidebarState, setSidebarState] = useState(false);
  const toggleSidebarState = () => setSidebarState((prev) => !prev);

  return (
    <div className='relative bg-gray-50 max-w-[1380px] overflow-hidden max-h-screen'>
      <Header toggle={toggleSidebarState} open={sidebarState} />
      <Sidebar toggle={sidebarState} />

      <main className='md:ml-60 pt-16 h-screen overflow-auto'>
        <ContainerWrap className=' py-8'>
          <div className='max-w-4xl mx-auto'>
            <Box>
              <Greeting />
              <div className='text-md py-6'>
                Here, you can see applications submitted & reviewed :
              </div>
              <ApplicationStats />
              <UnreviviewedApplications />
            </Box>
          </div>
        </ContainerWrap>
      </main>
    </div>
  );
}

export default AdminLayout;
