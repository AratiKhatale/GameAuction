import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material';

const AddPlayer = () => {
  const [player, setPlayer] = useState({
    name: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Player Info:', player);
    // Add your logic to save player data
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
          Player
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={player.name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Mobile No"
          name="mobile"
          value={player.mobile}
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
          Add Player
        </Button>
      </Paper>
    </Box>
  );
};

export default AddPlayer;
