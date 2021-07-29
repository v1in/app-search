import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error', error);
        setLoading(false);
        setError('❗️Error while loading data :(');
      })
      .finally(() => setLoading(false));
  }, [url]);

  return {data, error, loading};
};

export default useFetch;
