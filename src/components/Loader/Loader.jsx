import { LineWave } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <LineWave
      visible={true}
      height="300"
      width="300"
      color="#4fa94d"
      ariaLabel="line-wave-loading"
      wrapperClass={css.wrapper}
      firstLineColor="black"
      middleLineColor="black"
      lastLineColor="black"
    />
  );
};

export default Loader;
