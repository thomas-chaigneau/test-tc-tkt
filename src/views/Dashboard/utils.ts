import { v4 as uuidv4 } from 'uuid';
import { ISelectOption } from '../../components/Select';

import { IBusinessApiRes } from '../../services/api';

export const findBusinnesFiltersOptions = (businessList: IBusinessApiRes[], type: 'name' | 'sector') => {
  const uniqOptions: ISelectOption[]  = [];
  if (businessList?.length > 0) {
    for (let i = 0; i < businessList.length; i++) {
      const currentLabel: string = businessList[i][type];
      if (!uniqOptions.find(({ label }) => label === currentLabel)) {
        uniqOptions.push({ label: currentLabel, value: uuidv4() })
      }
    }
  }
  return uniqOptions;

}