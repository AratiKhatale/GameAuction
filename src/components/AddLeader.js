import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material';

const AddLeader = () => {
  const [leader, setLeader] = useState({
    name: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setLeader({
      ...leader,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Leader Info:', leader);
    // Add your logic to save Leader data
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" gutterBottom align="center">
          Leader
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={leader.name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Mobile No"
          name="mobile"
          value={leader.mobile}
          onChange={handleChange}
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Add l
        </Button>
      </Paper>
    </Box>
  );
};

export default AddLeader;
