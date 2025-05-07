import React, { useState } from 'react';
import {
    Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography,
    TableContainer, TextField, Button, Dialog, DialogActions, DialogContent,
    DialogTitle, Box
}
    from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './TeamsInfo.css';

const TeamsList = () => {
    const [leaders, setLeaders] = useState([
        { id: 1, name: 'Steve Smith', mobile: '9776543210' },
        { id: 2, name: 'Aaron Finch', mobile: '9123884567' },
        { id: 4, name: 'David Warner', mobile: '9988771122' },
        { id: 5, name: 'David Warner', mobile: '9988771122' },
        { id: 6, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
        { id: 7, name: 'David Warner', mobile: '9988771122' },
    ]);

    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [form, setForm] = useState({ id: null, name: '', mobile: '' });



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
            setLeaders(leaders.map(p => (p.id === form.id ? form : p)));
        } else {
            setLeaders([...leaders, { ...form, id: leaders.length + 1 }]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setLeaders(leaders.filter(p => p.id !== id));
    };
    return (
        <div className="teams-container1">
            <div className="teams-container">
                <h1>ICC CHAMPIONS TROPHY TEAMS 2025</h1>
            </div>

            <div className="teams-list">
                <Paper  sx={{ p: 2,}}>
                    <Typography variant="h6" gutterBottom sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        Leader List
                    </Typography>
                    <TableContainer sx={{ maxHeight: 400, overflow: 'auto' }}>

                        <Table className="reusable-table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'rgb(43 42 42 / 70%)' }}>
                                    <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Mobile No</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Actions</TableCell>
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
                                        <TableCell sx={{ border: '1px solid black' }}>{leader.id}</TableCell>
                                        <TableCell sx={{ border: '1px solid black' }}>{leader.name}</TableCell>
                                        <TableCell sx={{ border: '1px solid black' }}>{leader.mobile}</TableCell>
                                        <TableCell sx={{ border: '1px solid black' }}>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Button onClick={() => handleOpen(leader)} size="small" sx={{ minWidth: '0px', p: '4px' }}>
                                                    <EditIcon />
                                                </Button>
                                                <Button onClick={() => handleDelete(leader.id)} size="small" color="error" sx={{ minWidth: '0px', p: '4px' }}>
                                                    <DeleteIcon />
                                                </Button>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>{isEdit ? 'Edit Leader' : 'Add Leader'}</DialogTitle>
                        <DialogContent sx={{backgroundColor:'Background'}}>
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
            </div>
        </div>
    );
};

export default TeamsList;
