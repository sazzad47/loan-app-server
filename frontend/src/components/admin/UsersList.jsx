import React, { useEffect, useState } from 'react';
import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Navigation from './Navigation';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        const url = 'http://localhost:5000/user';
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoading(false);
                setUsers(data);
                setFetchError(false);
            })
            .catch(err => {
                setLoading(false);
                setFetchError(true)
                console.log(err);
            });
    }, []);

    return (
        <>
            <Box sx={{mb: 2}}>
                <Navigation />
            </Box>
            <Box sx={{}}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1050 }}>
                        <TableHead sx={{backgroundColor: 'whitesmoke'}}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>State</TableCell>
                                <TableCell>Zip Code</TableCell>
                                <TableCell>SS Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading && (
                                <TableRow>
                                    <TableCell colSpan={7}>Loading...</TableCell>
                                </TableRow>
                            )}
                            {fetchError && (
                                <TableRow>
                                    <TableCell colSpan={7} sx={{color: 'red'}}>Error! could not fetch users</TableCell>
                                </TableRow>
                            )}
                            {users.map(user => (
                                <TableRow>
                                    <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.city}</TableCell>
                                    <TableCell>{user.state}</TableCell>
                                    <TableCell>{user.zip_code}</TableCell>
                                    <TableCell>{user.ss_number}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default UsersList;
