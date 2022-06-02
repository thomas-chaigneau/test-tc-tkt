import React, { useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Select, { ISelectOption } from '../../components/Select';
import LoaderSpinner from '../../components/LoaderSpinner';

import apiService, { IBusinessApiRes } from '../../services/api';

import styles from './styles.module.css';

const Dashboard = () => {

  const [businessList, setBusinessList] = useState<IBusinessApiRes[]>([]);
  const [businessListIsLoading, setBusinessListIsLoading] = useState<boolean>(false);

  const [selectedSector, setSelectedSector] = useState<ISelectOption | null>(null);


  useEffect(() => {
    setBusinessListIsLoading(true);
    apiService
      .get<IBusinessApiRes[]>('biz')
      .then((res) => setBusinessList(res))
      .finally(() => setBusinessListIsLoading(false))
  }, [])

  // console.log({businessListIsLoading});
  // console.log(businessList);

  const sectorFilterOptions = useMemo(
    () => {
      const uniqOptions: ISelectOption[]  = [];
      if (businessList?.length > 0) {
        for (let i = 0; i < businessList.length; i++) {
          const currentSector = businessList[i]?.sector;
          if (!uniqOptions.find(({ label }) => label === currentSector)) {
            uniqOptions.push({ label: currentSector, value: uuidv4() })
          }
        }
      }
      return uniqOptions;
    },
    [businessList]
  );


  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Welcome on TKT dashboard !
      </div>
      {businessListIsLoading ? (
        <LoaderSpinner loading={businessListIsLoading} />
      ) : (
      <div className={styles.selectorsContainer}>
        <Select
          options={sectorFilterOptions}
          value={selectedSector}
          defaultValue={{ label: 'selector', value: uuidv4()}}
          onChange={(selected: ISelectOption) => setSelectedSector(selected)}
        />
        {/* <Select
          options={[{ label: 'toto', value: '987987'}]}
          value={{ label: 'toto', value: '987987'}}
          defaultValue={{ label: 'selector', value: uuidv4()}}
          onChange={(e: SyntheticEvent) => console.log(e.target)}
        /> */}
      </div>
      )}
    </div>
  );
};

export default Dashboard;