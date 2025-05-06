import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  TableContainer
} from '@mui/material';

const PlayerList = () => {
  const players = [
    { id: 1, name: 'Virat Kohli', mobile: '9876543210' },
    { id: 2, name: 'Rohit Sharma', mobile: '9123456789' },
    { id: 3, name: 'Hardik Pandya', mobile: '9988776655' }
  ];

  return (
    <Paper elevation={3} sx={{ p: 2,height: 'calc(100vh - 96px)'}}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#333' }}>
        Player List
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 400, border: '1px solid #e0e0e0' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Mobile No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow
                key={player.id}
                sx={{
                  '&:hover': { backgroundColor: '#f0f0f0' },
                  transition: 'background-color 0.3s ease'
                }}
              >
                <TableCell>{player.id}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.mobile}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PlayerList;
