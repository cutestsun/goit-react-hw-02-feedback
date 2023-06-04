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
