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

const LeaderList = () => {
  const leaders = [
    { id: 1, name: 'Steve Smith', mobile: '9776543210' },
    { id: 2, name: 'Aaron Finch', mobile: '9123884567' },
    { id: 3, name: 'David Warner', mobile: '9988771122' }
  ];

  return (
    <Paper elevation={3} sx={{ p: 2,height: 'calc(100vh - 96px)' }}>
      <Typography variant="h6" gutterBottom>
        Leader List
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
            {leaders.map((leader) => (
              <TableRow
                key={leader.id}
                sx={{
                  '&:hover': { backgroundColor: '#f0f0f0' },
                  transition: 'background-color 0.3s ease'
                }}
              >
                <TableCell>{leader.id}</TableCell>
                <TableCell>{leader.name}</TableCell>
                <TableCell>{leader.mobile}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default LeaderList;
