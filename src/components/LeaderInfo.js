import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

const LeaderList = () => {
  const leaders = [
    { id: 1, name: 'Steve Smith', mobile: '9776543210' },
    { id: 2, name: 'Aaron Finch', mobile: '9123884567' },
    { id: 3, name: 'David Warner', mobile: '9988771122' }
  ];

  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom>
        Leader List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mobile No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaders.map((leader) => (
            <TableRow key={leader.id}>
              <TableCell>{leader.id}</TableCell>
              <TableCell>{leader.name}</TableCell>
              <TableCell>{leader.mobile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default LeaderList;
