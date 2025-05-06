// LoginPage.jsx
import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        console.log('Logging in with:', formData);
    };

    const handleForgotPassword = () => {
       navigate('/forgotPassword')
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f2f5',
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: 320 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

                <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    margin="normal"
                />

                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                />

                <Box display="flex" justifyContent="center" mt={1}>
                    <Link href="#" onClick={handleForgotPassword} underline="hover">
                        Forgot password?
                    </Link>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    sx={{ marginTop: 3 }}
                >
                    Login
                </Button>

                <Box display="flex" justifyContent="center" mt={1}>
                    <Link href="#" onClick={() => navigate('/')} underline="hover">
                       Go Back to Home Page
                    </Link>
                </Box>

            </Paper>
        </Box>
    );
};

export default LoginPage;
