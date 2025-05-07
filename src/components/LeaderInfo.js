// // // import React, { useState } from 'react';
// // // import {
// // //     Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography,
// // //     TableContainer, TextField, Button, Dialog, DialogActions, DialogContent,
// // //     DialogTitle, Box
// // // } 
// // // from '@mui/material';
// // // import EditIcon from '@mui/icons-material/Edit';
// // // import DeleteIcon from '@mui/icons-material/Delete';

// // // const LeaderList = () => {
// // //        const [leaders, setLeaders] = useState([
// // //         { id: 1, name: 'Steve Smith', mobile: '9776543210' },
// // //         { id: 2, name: 'Aaron Finch', mobile: '9123884567' },
// // //         { id: 3, name: 'David Warner', mobile: '9988771122' }
// // //     ]);

// // //     const [open, setOpen] = useState(false);
// // //     const [isEdit, setIsEdit] = useState(false);
// // //     const [form, setForm] = useState({ id: null, name: '', mobile: '' });
// // //     const [confirmOpen, setConfirmOpen] = useState(false);
// // //     const [selectedId, setSelectedId] = useState(null);


// // //     const confirmDelete = () => {
// // //         setLeaders(leaders.filter(p => p.id !== selectedId));
// // //         setConfirmOpen(false);
// // //         setSelectedId(null);
// // //     };

// // //     const cancelDelete = () => {
// // //         setConfirmOpen(false);
// // //         setSelectedId(null);
// // //     };

// // //     const handleOpen = (player = { id: null, name: '', mobile: '' }) => {
// // //         setIsEdit(!!player.id);
// // //         setForm(player);
// // //         setOpen(true);
// // //     };

// // //     const handleClose = () => {
// // //         setForm({ id: null, name: '', mobile: '' });
// // //         setOpen(false);
// // //     };

// // //     const handleChange = (e) => {
// // //         setForm({ ...form, [e.target.name]: e.target.value });
// // //     };

// // //     const handleSubmit = () => {
// // //         if (isEdit) {
// // //             setLeaders(leaders.map(p => (p.id === form.id ? form : p)));
// // //         } else {
// // //             setLeaders([...leaders, { ...form, id: leaders.length + 1 }]);
// // //         }
// // //         handleClose();
// // //     };

// // //     const handleDelete = (id) => {
// // //         setSelectedId(id);
// // //         setConfirmOpen(true);
// // //         setLeaders(leaders.filter(p => p.id !== id));
// // //     };
// // //     return (
// // //         <Paper elevation={3} sx={{ p: 2, height: 'calc(100vh - 96px)' }}>
// // //             <Typography variant="h6" gutterBottom>
// // //                 Leader List
// // //             </Typography>
// // //             <TableContainer>
// // //                 <Table sx={{ minWidth: 400, border: '1px solid #e0e0e0' }}>
// // //                     <TableHead>
// // //                         <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
// // //                             <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
// // //                             <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
// // //                             <TableCell sx={{ fontWeight: 'bold' }}>Mobile No</TableCell>
// // //                             <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
// // //                         </TableRow>
// // //                     </TableHead>
// // //                     <TableBody>
// // //                         {leaders.map((leader) => (
// // //                             <TableRow
// // //                                 key={leader.id}
// // //                                 sx={{
// // //                                     '&:hover': { backgroundColor: '#f0f0f0' },
// // //                                     transition: 'background-color 0.3s ease'
// // //                                 }}
// // //                             >
// // //                                 <TableCell>{leader.id}</TableCell>
// // //                                 <TableCell>{leader.name}</TableCell>
// // //                                 <TableCell>{leader.mobile}</TableCell>

// // //                                 <TableCell>
// // //                                     <Box display="flex" alignItems="center" gap={1}>
// // //                                         <Button onClick={() => handleOpen(leader)} size="small" sx={{ minWidth: '0px', p: '4px' }}>
// // //                                             <EditIcon />
// // //                                         </Button>
// // //                                         <Button onClick={() => handleDelete(leader.id)} size="small" color="error" sx={{ minWidth: '0px', p: '4px' }}>
// // //                                             <DeleteIcon />
// // //                                         </Button>
// // //                                     </Box>
// // //                                 </TableCell>
// // //                             </TableRow>
// // //                         ))}
// // //                     </TableBody>
// // //                 </Table>
// // //             </TableContainer>

// // //             <Dialog open={open} onClose={handleClose}>
// // //                 <DialogTitle>{isEdit ? 'Edit Leader' : 'Add Leader'}</DialogTitle>
// // //                 <DialogContent>
// // //                     <TextField
// // //                         margin="dense"
// // //                         label="Name"
// // //                         name="name"
// // //                         value={form.name}
// // //                         onChange={handleChange}
// // //                         fullWidth
// // //                     />
// // //                     <TextField
// // //                         margin="dense"
// // //                         label="Mobile"
// // //                         name="mobile"
// // //                         value={form.mobile}
// // //                         onChange={handleChange}
// // //                         fullWidth
// // //                     />
// // //                 </DialogContent>
// // //                 <DialogActions>
// // //                     <Button onClick={handleClose}>Cancel</Button>
// // //                     <Button onClick={handleSubmit}>{isEdit ? 'Update' : 'Add'}</Button>
// // //                 </DialogActions>
// // //             </Dialog>
// // //         </Paper>
// // //     );
// // // };

// // // export default LeaderList;


// // import React from 'react';
// // import { Box, Typography, Avatar } from '@mui/material';
// // import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// // import CancelIcon from '@mui/icons-material/Cancel';

// // const teams = [
// //   { name: 'India', flag: '🇮🇳', status: 'confirmed' },
// //   { name: 'Australia', flag: '🇦🇺', status: 'confirmed' },
// //   { name: 'England', flag: '🏴', status: 'confirmed' },
// //   { name: 'Pakistan', flag: '🇵🇰', status: 'confirmed' },
// //   { name: 'New Zealand', flag: '🇳🇿', status: 'confirmed' },
// //   { name: 'South Africa', flag: '🇿🇦', status: 'confirmed' },
// //   { name: 'Sri Lanka', flag: '🇱🇰', status: 'confirmed' },
// //   { name: 'Bangladesh', flag: '🇧🇩', status: 'pending' }
// // ];

// // const statusIcon = {
// //   confirmed: <CheckCircleIcon sx={{ color: 'green' }} />,
// //   pending: <CancelIcon sx={{ color: 'gray' }} />
// // };

// // const TeamList = () => {
// //   return (
// //     <Box
// //       sx={{
// //         background: 'linear-gradient(to bottom, #000, #002)',
// //         color: '#fff',
// //         minHeight: '100vh',
// //         p: 3,
// //         textAlign: 'center'
// //       }}
// //     >
// //       <Typography variant="h4" gutterBottom>
// //         ICC Champions Trophy
// //       </Typography>
// //       <Typography variant="h6" gutterBottom>
// //         TEAMS 2025
// //       </Typography>
// //       <Box
// //         sx={{
// //           maxWidth: 400,
// //           mx: 'auto',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           gap: 2,
// //           mt: 4
// //         }}
// //       >
// //         {teams.map((team, index) => (
// //           <Box
// //             key={index}
// //             sx={{
// //               display: 'flex',
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //               border: '1px solid #444',
// //               borderRadius: 2,
// //               px: 2,
// //               py: 1,
// //               backgroundColor: '#111'
// //             }}
// //           >
// //             <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //               <span style={{ fontSize: '1.2rem' }}>{team.flag}</span>
// //               {team.name}
// //             </Typography>
// //             {statusIcon[team.status]}
// //           </Box>
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default TeamList;

// import React from 'react';
// import './TeamsInfo.css';

// const teams = [
//   { name: 'India', flag: '🇮🇳', qualified: true },
//   { name: 'Australia', flag: '🇦🇺', qualified: true },
//   { name: 'England', flag: '🏴', qualified: true },
//   { name: 'Pakistan', flag: '🇵🇰', qualified: true },
//   { name: 'New Zealand', flag: '🇳🇿', qualified: true },
//   { name: 'South Africa', flag: '🇿🇦', qualified: true },
//   { name: 'Sri Lanka', flag: '🇱🇰', qualified: true },
//   { name: 'Bangladesh', flag: '🇧🇩', qualified: false },
// ];

// const Teams2025 = () => {
//   return (
//     <div className="cricket-background">
//       <div className="cricket-title">ICC CHAMPIONS TROPHY - TEAMS 2025</div>
//       <div className="teams-container">
//         {teams.map((team, index) => (
//           <div className="team-row" key={index}>
//             <span>{team.name}</span>
//             <span>{team.flag}</span>
//             <span>{team.qualified ? '✔️' : '❌'}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Teams2025;


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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


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
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);


    const confirmDelete = () => {
        setLeaders(leaders.filter(p => p.id !== selectedId));
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
            setLeaders(leaders.map(p => (p.id === form.id ? form : p)));
        } else {
            setLeaders([...leaders, { ...form, id: leaders.length + 1 }]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setConfirmOpen(true);
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

                        {/* <Table sx={{ minWidth: 400,border: '1px solid #0b0a0a' }}>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'rgb(43 42 42 / 70%)' }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Mobile No</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
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

                                        <TableCell>
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
                        </Table> */}

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
