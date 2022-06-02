import React, { useState, useEffect } from 'react';

import apiService from '../../services/api';

import styles from './styles.module.css';

const Dashboard = () => {

  const [businessList, setBusinessList] = useState<[]>([]);
  const [businessListIsLoading, setBusinessListIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setBusinessListIsLoading(true);
    apiService
      .get('biz')
      .then((res) => setBusinessList(res))
      .finally(() => setBusinessListIsLoading(false))
  }, [])

  console.log({businessListIsLoading});
  console.log(businessList.length);


  return (
    <div className={styles.root}>
      Dashboard
    </div>
  );
};

export default Dashboard;