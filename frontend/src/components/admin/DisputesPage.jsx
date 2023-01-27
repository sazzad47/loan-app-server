import React from 'react';
import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Navigation from './Navigation';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const DisputesPage = () => {
    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Navigation />
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }}>
                    <TableHead sx={{ backgroundColor: 'whitesmoke' }}>
                        <TableRow>
                            <TableCell>Users Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Reason</TableCell>
                            <TableCell>Credit Furnisher</TableCell>
                            <TableCell>instruction</TableCell>
                            <TableCell>Equifax</TableCell>
                            <TableCell>Experian</TableCell>
                            <TableCell>TransUnion</TableCell>
                            <TableCell>Letter Name</TableCell>
                            <TableCell>Equifax Letter</TableCell>
                            <TableCell>Experian Letter</TableCell>
                            <TableCell>TransUnion Letter</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Wilberforce Oyando</TableCell>
                            <TableCell>oyandowilber99@gmail.com</TableCell>
                            <TableCell>Hello Reason</TableCell>
                            <TableCell>My Furnisher</TableCell>
                            <TableCell>My Instruction</TableCell>
                            <TableCell>
                                <CheckCircleIcon sx={{ color: 'green' }} />
                            </TableCell>
                            <TableCell>
                                <CancelIcon sx={{ color: 'red' }} />
                            </TableCell>
                            <TableCell>
                                <CancelIcon sx={{ color: 'green' }} />
                            </TableCell>
                            <TableCell>100 words Warning letter</TableCell>
                            <TableCell>
                                <Button>View</Button>
                            </TableCell>
                            <TableCell>
                                <Button>View</Button>
                            </TableCell>
                            <TableCell>
                                <Button>View</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default DisputesPage;
