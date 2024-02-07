import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [date, setDate] = React.useState('2024-08-02');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          defaultValue={10}
          value={date}
          onChange={handleChange}
          label="Age"
        >
          
          <MenuItem value="2024-08-02">2024-08-02</MenuItem>
          <MenuItem value="2024-09-02">2024-09-02</MenuItem>
          <MenuItem value="2024-10-02">2024-10-02</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}