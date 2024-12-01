import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

interface FormData {
  children: string;
}

const YourComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    children: '0'
  });

  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    setFormData(prevData => ({
      ...prevData,
      children: event.target.value
    }));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="children-label">Children</InputLabel>
      <Select
        labelId="children-label"
        id="children"
        name="children"
        value={formData.children}
        onChange={handleDropdownChange}
        label="Children"
      >
        <MenuItem value="0">0</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4+</MenuItem>
      </Select>
    </FormControl>
  );
};

export default YourComponent;