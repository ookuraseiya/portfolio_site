import ReactLoading from 'react-loading';

export const Loading = () => {
  return (
    <>
      <div className="loading">
        <ReactLoading type="spinningBubbles" color="#434343" />
      </div>
    </>
  );
};
