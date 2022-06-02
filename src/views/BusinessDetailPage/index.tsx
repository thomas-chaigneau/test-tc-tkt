import { useState, useEffect } from 'react';

import apiService from '../../services/api';

import styles from './styles.module.css';

const BusinessDetailPage = () => {

  const [selectedBusiness, setselectedBusiness] = useState<any>(null);
  const [selectedBusinessIsLoading, setselectedBusinessIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setselectedBusinessIsLoading(true);
    apiService
      .getById('biz', 1)
      .then((res) => setselectedBusiness(res))
      .finally(() => setselectedBusinessIsLoading(false))
  }, [])

  console.log({selectedBusinessIsLoading});
  console.log(selectedBusiness);


  return (
    <div className={styles.root}>
      BusinessDetailPage
    </div>
  );
};

export default BusinessDetailPage;