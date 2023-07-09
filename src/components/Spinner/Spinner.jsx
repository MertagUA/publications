import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#000000']}
    />
  );
};
