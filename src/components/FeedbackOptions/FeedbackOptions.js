import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ onChange, onReset, options }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={nanoid()}
          type="button"
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}

      <button type="button" onClick={onReset}>
        reset
      </button>
    </div>
  );
};