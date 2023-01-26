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


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = 'http://localhost:5000/user';
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setUsers(data);
                console.log(data);
            })
            .catch(err => {
                setLoading(false)
                // alert('Error: Could not fetch list of users');
                console.log(err);
            });
    }, []);

    return (
        <Box sx={{}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Zip Code</TableCell>
                            <TableCell>SS Number</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Ian</TableCell>
                            <TableCell>Ocheing</TableCell>
                            <TableCell>0756220895</TableCell>
                            <TableCell>12/12/22</TableCell>
                            <TableCell>A</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default UsersList;
