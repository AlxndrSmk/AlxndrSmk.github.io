/* eslint-disable no-constant-condition */
import { Spinner } from '@chakra-ui/react';

interface LoadingSpinnerProps {
  isLoading: boolean;
  width: number;
  height: number;
}

const SpinnerLoader: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  width,
  height,
}) => {
  return isLoading ? (
    <Spinner
      thickness="2px"
      speed="1.4s"
      color="grey"
      className="c-loading__spinner"
      width={`${width}rem`}
      height={`${height}rem`}
    />
  ) : (
    <></>
  );
};

export default SpinnerLoader;
