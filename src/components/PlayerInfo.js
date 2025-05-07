import React, { useState } from 'react';
import {
    Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography,
    TableContainer, TextField, Button, Dialog, DialogActions, DialogContent,
    DialogTitle, Box
} 
from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PlayerList = () => {
    const [players, setPlayers] = useState([
        { id: 1, name: 'Virat Kohli', mobile: '9876543210' },
        { id: 2, name: 'Rohit Sharma', mobile: '9123456789' },
        { id: 3, name: 'Hardik Pandya', mobile: '9988776655' }
    ]);
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [form, setForm] = useState({ id: null, name: '', mobile: '' });
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

   
      const confirmDelete = () => {
        setPlayers(players.filter(p => p.id !== selectedId));
        setConfirmOpen(false);
        setSelectedId(null);
      };
      
      const cancelDelete = () => {
        setConfirmOpen(false);
        setSelectedId(null);
      };
      
    const handleOpen = (player = { id: null, name: '', mobile: '' }) => {
        setIsEdit(!!player.id);
        setForm(player);
        setOpen(true);
    };

    const handleClose = () => {
        setForm({ id: null, name: '', mobile: '' });
        setOpen(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (isEdit) {
            setPlayers(players.map(p => (p.id === form.id ? form : p)));
        } else {
            setPlayers([...players, { ...form, id: players.length + 1 }]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setConfirmOpen(true);
        setPlayers(players.filter(p => p.id !== id));
    };

    return (
        <Paper elevation={3} sx={{ p: 2, }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#333' }}>
                Player List
            </Typography>
            <Button variant="contained" onClick={() => handleOpen()} sx={{ mb: 2 }}>
                Add Player
            </Button>
            <TableContainer>
                <Table sx={{ minWidth: 400, border: '1px solid #e0e0e0' }}>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Mobile No</TableCell>
                            <TableCell>Actions</TableCell>
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
                                <TableCell>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <Button onClick={() => handleOpen(player)} size="small" sx={{ minWidth: '0px', p: '4px' }}>
                                            <EditIcon />
                                        </Button>
                                        <Button onClick={() => handleDelete(player.id)} size="small" color="error" sx={{ minWidth: '0px', p: '4px' }}>
                                            <DeleteIcon />
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for Add/Edit */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{isEdit ? 'Edit Player' : 'Add Player'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Mobile"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{isEdit ? 'Update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default PlayerList;
