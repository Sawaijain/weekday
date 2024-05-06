import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    alignItems: 'center',
  },
  formControl: {
    minWidth: 120,
  },
}));

const Filter = ({ onFilterChange }) => {
  const classes = useStyles();
  const [filterValues, setFilterValues] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Call onFilterChange whenever any filter value changes
  
  useEffect(() => {
    onFilterChange(filterValues);
  }, [filterValues, onFilterChange]);

  return (
    <Box className={classes.root}>
      <TextField
        label="Min Experience"
        variant="outlined"
        name="minExperience"
        value={filterValues.minExperience}
        onChange={handleInputChange}
      />
      <TextField
        label="Company Name"
        variant="outlined"
        name="companyName"
        value={filterValues.companyName}
        onChange={handleInputChange}
      />
      <TextField
        label="Location"
        variant="outlined"
        name="location"
        value={filterValues.location}
        onChange={handleInputChange}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="remote-label">Remote/on-site</InputLabel>
        <Select
          labelId="remote-label"
          label="Remote/on-site"
          name="remote"
          value={filterValues.remote}
          onChange={handleSelectChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="on-site">On-site</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Tech Stack"
        variant="outlined"
        name="techStack"
        value={filterValues.techStack}
        onChange={handleInputChange}
      />
      <TextField
        label="Role"
        variant="outlined"
        name="role"
        value={filterValues.role}
        onChange={handleInputChange}
      />
      <TextField
        label="Min Base Pay"
        variant="outlined"
        name="minBasePay"
        value={filterValues.minBasePay}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default Filter;
