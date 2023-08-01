import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios, { AxiosResponse } from 'axios';
import { backendUrl } from '../../config/constants';
import { useAuth } from './AuthContext';

type Data = {
  registered_count: number;
  reviewed_count: number;
  first_unreviewed: any[];
};

type AdminDataContextType = {
  data: Data | null;
  loading: boolean;
  error: string | null;
  fetchDashboard: () => Promise<void>;
};

export const AdminDataContext = createContext<AdminDataContextType>({
  data: null,
  loading: false,
  error: null,
  fetchDashboard: async () => {},
});

export const useData = () => useContext(AdminDataContext);

const AdminDataProvider = (props) => {
  const [data, setData] = useState<Data | null>({
    registered_count: 0,
    reviewed_count: 0,
    first_unreviewed: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { token, handleUnauthorized } = useAuth();

  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<Data> = await axios.get(
        backendUrl + '/api/dashboard',
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      );
      setData(response.data);
    } catch (error) {
      setError('Error fetching data');
      if (error.response && error.response.status === 401) {
        handleUnauthorized!();
      }
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <AdminDataContext.Provider value={{ data, loading, error, fetchDashboard }}>
      {props.children}
    </AdminDataContext.Provider>
  );
};

export default AdminDataProvider;
