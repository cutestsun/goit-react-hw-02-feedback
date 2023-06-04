import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(item => (
        <Button
          onClick={() => {
            onLeaveFeedback(item);
          }}
          key={item}
        >
          {item}
        </Button>
      ))}
    </>
  );
};
