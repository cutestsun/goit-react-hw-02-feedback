import PropTypes from 'prop-types';

export const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <>
      {Object.entries(state).map(item => (
        <p key={item[0]}>{item.join(': ')}</p>
      ))}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
