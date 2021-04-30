/* eslint-disable react/jsx-wrap-multilines */
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@material-ui/core';

const categories = [
  { id: '1', name: 'Electronics' },
  { id: '2', name: 'Clothing' },
  { id: '3', name: 'Home' },
  { id: '4', name: 'Other' },
];

const Categories = () => (
  <>
    <FormLabel
      style={{ fontSize: '20px', marginBottom: '20px' }}
      component="legend"
    >
      Choose from Categories
    </FormLabel>
    <FormGroup>
      {categories.map((category) => (
        <FormControlLabel
          key={category.id}
          control={
            <Checkbox
              checked={false}
              name={category.id}
              fontSize="small"
              color="primary"
            />
          }
          label={category.name}
        />
      ))}
    </FormGroup>
  </>
);

export default Categories;
