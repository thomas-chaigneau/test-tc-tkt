import NavButton, { INavButtonProps } from '../../components/NavButton';


import styles from './styles.module.css';

const Navbar = () => {

  const menuItems: INavButtonProps[] = [
    {
      text: 'dashboard',
      iconName: 'dashboard',
      onClick: () => console.log('dashboard')
    },
    {
      text: 'settings',
      iconName: 'clock',
      onClick: () => console.log('clock')
    },
    {
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
      {menuItems.map(item => <NavButton {...item} />)}
    </div>
  );
};
export default Navbar;