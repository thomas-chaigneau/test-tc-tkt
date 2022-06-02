import Select, { OptionsOrGroups, GroupBase } from 'react-select'

import styles from './styles.module.css';

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  value: ISelectOption | undefined;
  options: OptionsOrGroups<ISelectOption, GroupBase<ISelectOption>>;
  defaultValue: ISelectOption;
  onChange: any;
}

const CustomSelect = ({ value, options, defaultValue, onChange }: ISelectProps) => {
  return (
    <Select
      className={styles.root}
      components={{ IndicatorSeparator: () => null }}
      value={value}
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
};
export default CustomSelect;