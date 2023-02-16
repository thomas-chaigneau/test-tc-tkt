import { v4 as uuidv4 } from 'uuid';

import NavButton, { INavButtonProps } from '../NavButton';

import styles from './styles.module.css';

const Navbar = () => {

  const menuItems: INavButtonProps[] = [
    {
      key: uuidv4(),
      text: 'dashboard',
      iconName: 'dashboard',
      onClick: () => console.log('dashboard')
    },
    {
      key: uuidv4(),
      text: 'settings',
      iconName: 'clock',
      onClick: () => console.log('clock')
    },
    {
      key: uuidv4(),
      text: 'account',
      iconName: 'search',
      onClick: () => console.log('search')
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.logoTkt}>
        TKT
      </div>
      {menuItems.map(({ key, ...props }) => <NavButton key={key} {...props} />)}
    </div>
  );
};
export default Navbar;