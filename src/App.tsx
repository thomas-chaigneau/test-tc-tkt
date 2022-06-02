import Dashboard from './views/Dashboard';
import Navbar from './views/Navbar';

import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.dashboardContainer}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
