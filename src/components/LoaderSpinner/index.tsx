import { ClipLoader } from 'react-spinners';

import styles from './styles.module.css';


export interface ILoaderSpinner {
  loading: boolean;
  height?: number;
  color?: string;
  size?: number;
}

const LoaderSpinner = ({ color, loading, size }: ILoaderSpinner) => {
  return (
    <div className={styles.root}>
      <ClipLoader color={color || '#4E59FF'} loading={loading} size={size || 35} />
    </div>
  )
}

export default LoaderSpinner;