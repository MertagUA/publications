import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="blocks-loading"
      wrapperStyle={{ left: '200px' }}
      wrapperClass="blocks-wrapper"
      colors={['#0d6efd']}
    />
  );
};
