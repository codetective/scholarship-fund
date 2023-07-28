import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Box from './Box';
import UnreviviewedApplications from '../UnreviewedApplications';
import Greeting from '../Greeting';
import ApplicationStats from '../ApplicationStats';
import ContainerWrap from '../../../atoms/ContainerWrap';
import Rodal from 'rodal';
import ReviewData from '../Review/ReviewData';

export type TableData = {
  id: string;
  email: string;
  dob: string;
  gender: string;
  course_of_study: string;
  lga: string;
  name: string;
  programme_of_study: string;
};

function AdminLayout() {
  const [sidebarState, setSidebarState] = useState(false);
  const toggleSidebarState = () => setSidebarState((prev) => !prev);

  const [visible, setVisible] = useState<TableData | null>(null);

  function showModal(data) {
    return setVisible(data);
  }
  function closeModal() {
    return setVisible(null);
  }

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
              <UnreviviewedApplications showModal={showModal} />
            </Box>
          </div>
        </ContainerWrap>
        <Rodal
          customStyles={{
            height: '90vh',
            width: '90vw',
            overflow: 'hidden',
            padding: 0,
          }}
          closeMaskOnClick={false}
          closeOnEsc={false}
          visible={visible ? true : false}
          onClose={closeModal}
          showCloseButton={true}
        >
          <div className='h-full'>
            <div
              className='md:text-xl bg-gray-50 border-b-gray-600 py-2 px-5  shadow-xl'
              style={{
                borderBottom: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              Review Submission for : <b> {visible?.name} </b>
            </div>
            <ReviewData data={visible} />
          </div>
        </Rodal>
      </main>
    </div>
  );
}

export default AdminLayout;
