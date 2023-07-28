import React, { useCallback, useEffect, useState } from 'react';
import { TableData } from '../layout/AdminLayout';
import TBody from '../../../atoms/Table/TBody';
import { backendUrl } from '../../../../config/constants';
import axios, { AxiosResponse } from 'axios';
import { useAuth } from '../../../contexts/AuthContext';
import ErrorAlert from '../../../atoms/ErrorAlert';

type Docs = {};

function ReviewData({ data }: { data: TableData | null }) {
  const { token } = useAuth();

  const [docs, setDocs] = useState<Docs | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDocuments = useCallback(async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<Docs> = await axios.get(
        backendUrl + '/api/docs?id=' + id,
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      );
      setDocs(response.data);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    data?.id && fetchDocuments(data.id);
  }, [data?.id]);

  return (
    <div className='pt-5  px-5 bg-white overflow-scroll h-[85%] w-full pb-10'>
      <table className='min-w-full text-left text-sm font-light'>
        <TBody>
          <DataRow title={'1. gender'} value={data?.gender} />
          <DataRow title={'2. date of birth'} value={data?.dob} />
          <DataRow title={'3. Local Government'} value={data?.lga} />
          <DataRow title={'4. Course of Study'} value={data?.course_of_study} />
          <DataRow
            title={'5. Programme of study'}
            value={data?.programme_of_study}
          />
          <DataRow title={'6. email'} value={data?.email} />
        </TBody>
      </table>
      <div className='flex py-5 md:text-lg flex-col gap-8'>
        <h2>{loading ? <i>Loading Documents</i> : 'Documents'}</h2>
        {error && !loading && <ErrorAlert>Error fetching documents</ErrorAlert>}
      </div>
    </div>
  );
}

export default ReviewData;

function DataRow({ title, value }) {
  return (
    <tr className='border-b-[1px] flex  flex-col md:table-row'>
      <td className='whitespace-nowrap   capitalize py-2'>{title} :</td>
      <td className='whitespace-nowrap md:text-lg heading-font py-2 font-semibold'>
        {value}
      </td>
    </tr>
  );
}
