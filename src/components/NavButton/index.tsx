import { ImMeter as dashboard } from 'react-icons/im';
import { ImAlarm as clock } from 'react-icons/im';
import { ImSearch as search } from 'react-icons/im';

import styles from './styles.module.css';

export interface INavButtonProps {
  text: string;
  iconName: 'dashboard' | 'clock' | 'search';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

const NavButton = ({ text, iconName, onClick, color = '4E59FF' }: INavButtonProps) => {
  const icons = { dashboard, clock, search };
  const Icon = icons[iconName];
  return (
    <button className={styles.root} onClick={onClick}>
      <Icon color={color} className={styles.icon}/>
      <div className={styles.text}>{text}</div>
    </button>
  );
};
export default NavButton;