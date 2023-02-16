import { useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Select, { ISelectOption } from '../../components/Select';
import LoaderSpinner from '../../components/LoaderSpinner';
import TableRow from '../../components/TableRow';
import Modal from '../../components/Modal';
import BusinessDetailCard from '../../components/BusinessDetailCard';

import apiService, { IBusinessApiRes } from '../../services/api';

import { findBusinnesFiltersOptions } from './utils';

import styles from './styles.module.css';

const Dashboard = () => {


    const [openModal, setOpenModal] = useState<boolean>(false);
    const [businessList, setBusinessList] = useState<IBusinessApiRes[]>([]);
    const [businessListIsLoading, setBusinessListIsLoading] = useState<boolean>(false);

    const [filteredBusinessList, setFilteredBusinessList] = useState<IBusinessApiRes[]>([]);

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

  useEffect(() => {
    const selectedSector = selectedSectorFilter?.label
    const selectedName = selectedBusinnesNameFilter?.label
    const filred = businessList.filter(({ sector, name }) => {
      if (selectedSector && !selectedName) {
        return sector === selectedSector
      }
      if (!selectedSector && selectedName) {
        return name === selectedName
      }
      if (selectedSector && selectedName) {
        return sector === selectedSector && name === selectedName
      }
      return true;
    })
    setFilteredBusinessList(filred);
  }, [businessList, selectedSectorFilter, selectedBusinnesNameFilter])


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
      <div className={styles.businessListContainer}>
      <div className={styles.title}>
        Voici la liste des business correspondant aux filtres:
      </div>
        {filteredBusinessList.map((business) => (
          <TableRow
            key={business.id}
            onClick={() => setOpenModal(true)}
            rowTemplate={[
              { type: 'txt', text: business.name },
              { type: 'txt', text: business.siren.toString() },
              { type: 'buttonLike', text: business.sector },
            ]}
          />
        ))}
      </div>
      <Modal isOpen={openModal} setModalIsOpen={setOpenModal}>
            <BusinessDetailCard/>
        </Modal>
    </div>
  );
};

export default Dashboard;