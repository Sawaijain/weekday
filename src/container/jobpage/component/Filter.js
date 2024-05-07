import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, useMediaQuery } from '@mui/material';
import styles from "./Filter.module.css"

const Filter = ({ onFilterChange }) => {
  const [filterValues, setFilterValues] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    // techStack: '',
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

  // Call onFilterChange whenever any filter value changes
  useEffect(() => {
    onFilterChange(filterValues);
  }, [filterValues, onFilterChange]);

  return (
    <Box className={styles.filterRoot}>
      <FormControl className={styles.filterFormControl}>
        <InputLabel id="remote-label">Min Experience</InputLabel>
      <Select
        className={styles.filterFormControl}
        label="Min Experience"
        variant="outlined"
        name="minExperience"
        value={filterValues.minExperience}
        onChange={handleInputChange}
        select // Add select attribute to render dropdown
        SelectProps={{ native: true }} // Render as native dropdown
      >
        {[...Array(11).keys()].map((num) => (
          <MenuItem key={num} value={num}>{num}</MenuItem>
        ))}
      </Select>
      </FormControl>
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
      <FormControl className={styles.filterFormControl}>
        <InputLabel id="remote-label">Remote/on-site</InputLabel>
        <Select
          labelId="remote-label"
          label="Remote/on-site"
          name="remote"
          value={filterValues.remote}
          onChange={handleInputChange}
          SelectProps={{ native: true }} // Render as native dropdown
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="on-site">On-site</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Role"
        variant="outlined"
        name="role"
        value={filterValues.role}
        onChange={handleInputChange}
      />
      <FormControl className={styles.filterFormControl}>
        <InputLabel id="remote-label">Min Pay</InputLabel>
      <Select
        label="Min Base Pay"
        variant="outlined"
        name="minBasePay"
        value={filterValues.minBasePay}
        onChange={handleInputChange}
        select // Add select attribute to render dropdown
        SelectProps={{ native: true }} // Render as native dropdown
      >
        {[0, 10, 20, 30, 40, 50, 60, 70].map((value) => (
          <MenuItem key={value} value={value}>${value}k</MenuItem>
        ))}
      </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
