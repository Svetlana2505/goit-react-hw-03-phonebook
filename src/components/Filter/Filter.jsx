import { Input } from './Filter.styled.js';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </label>
  );
};
