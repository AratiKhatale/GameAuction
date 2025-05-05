import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

const PlayerList = () => {
    const players = [
        { id: 1, name: 'Virat Kohli', mobile: '9876543210' },
        { id: 2, name: 'Rohit Sharma', mobile: '9123456789' },
        { id: 3, name: 'Hardik Pandya', mobile: '9988776655' }
    ];

    return (
        <Paper elevation={5} sx={{ padding: 3, borderRadius: 2, backgroundColor: '#f4f4f4' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#333' }}>
                Player List
            </Typography>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#1976d2', color: 'white' }}>
                        <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Mobile No</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map((player) => (
                        <TableRow key={player.id} sx={{ '&:hover': { backgroundColor: '#f1f1f1' } }}>
                            <TableCell>{player.id}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.mobile}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default PlayerList;
