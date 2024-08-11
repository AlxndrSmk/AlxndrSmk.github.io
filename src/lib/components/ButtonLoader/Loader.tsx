/* eslint-disable no-constant-condition */
import './Loader.scss';

interface ButtonLoaderProps {
  isLoading: boolean;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ isLoading }) => {
  return isLoading ? (
    <div className="c-button-loading">
    </div>
  ) : (
    <></>
  );
};

export default ButtonLoader;
