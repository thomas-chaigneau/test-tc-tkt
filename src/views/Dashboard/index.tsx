import { useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Select, { ISelectOption } from '../../components/Select';
import LoaderSpinner from '../../components/LoaderSpinner';

import apiService, { IBusinessApiRes } from '../../services/api';

import { findBusinnesFiltersOptions } from './utils';

import styles from './styles.module.css';

const Dashboard = () => {

  const [businessList, setBusinessList] = useState<IBusinessApiRes[]>([]);
  const [businessListIsLoading, setBusinessListIsLoading] = useState<boolean>(false);

  const [selectedSectorFilter, setSelectedSectorFilter] = useState<ISelectOption | undefined>(undefined);
  const [selectedBusinnesNameFilter, setselectedBusinnesNameFilter] = useState<ISelectOption | undefined>(undefined);


  useEffect(() => {
    setBusinessListIsLoading(true);
    apiService
      .get<IBusinessApiRes[]>('biz')
      .then((res) => setBusinessList(res))
      .finally(() => setBusinessListIsLoading(false))
  }, [])

  const sectorFilterOptions = useMemo(
    () => findBusinnesFiltersOptions(businessList, 'sector'),
    [businessList]
  );

  const businessNameFilterOptions = useMemo(
    () => findBusinnesFiltersOptions(businessList, 'name'),
    [businessList]
  );

  console.log(businessList);
  console.log(businessNameFilterOptions);

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
          value={selectedSectorFilter}
          defaultValue={{ label: 'Secteur...', value: uuidv4()}}
          onChange={(selected: ISelectOption) => setSelectedSectorFilter(selected)}
        />
        <Select
          options={businessNameFilterOptions}
          value={selectedBusinnesNameFilter}
          defaultValue={{ label: 'Business name...', value: uuidv4()}}
          onChange={(selected: ISelectOption) => setselectedBusinnesNameFilter(selected)}
        />
      </div>
      )}
    </div>
  );
};

export default Dashboard;