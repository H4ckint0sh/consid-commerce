/* eslint-disable react/no-array-index-key */
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

const prices = [
  {
    id: 0,
    name: 'Any',
    array: [0, 1000],
  },
  {
    id: 1,
    name: 'Under 300',
    array: [0, 300],
  },
  {
    id: 2,
    name: '300-400',
    array: [300, 400],
  },
  {
    id: 3,
    name: '400-500',
    array: [400, 500],
  },
  {
    id: 4,
    name: '500-600',
    array: [500, 600],
  },
  {
    IDBCursorWithValue: 5,
    name: '600-700',
    array: [600, 700],
  },
];

const Prices = () => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Choose from Prices</FormLabel>
    <RadioGroup aria-label="prices" name="prices">
      {prices.map((price, index) => (
        <FormControlLabel
          key={index}
          control={<Radio color="primary" />}
          value={price.id}
          label={price.name}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default Prices;
