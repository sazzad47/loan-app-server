import React, { useEffect, useState } from 'react';
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
import RichTextModal from './RichTextModal';

const DisputesPage = () => {
    const [disputes, setDisputes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [content, setContent] = useState('');

    const [modalOpen, setModalOpen] = useState(false);

    const handleOPen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    console.log(content);

    useEffect(() => {
        const url = 'http://localhost:5000/dispute';

        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setDisputes(data);
                console.log(data);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
            });
    }, []);
    return (
        <>
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
                            {loading && (
                                <TableRow>
                                    <TableCell colSpan={12}>
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            )}
                            {error && (
                                <TableRow>
                                    <TableCell colSpan={12}>
                                        Error! Could not fetch disputes
                                    </TableCell>
                                </TableRow>
                            )}
                            {React.Children.toArray(
                                disputes?.map(dispute => (
                                    <TableRow>
                                        <TableCell>
                                            Wilberforce Oyando
                                        </TableCell>
                                        <TableCell>
                                            oyandowilber99@gmail.com
                                        </TableCell>
                                        <TableCell>{dispute.reason}</TableCell>
                                        <TableCell>
                                            {dispute.credit_furnisher}
                                        </TableCell>
                                        <TableCell>
                                            {dispute.instruction}
                                        </TableCell>
                                        <TableCell>
                                            {dispute.equifax ? (
                                                <CheckCircleIcon
                                                    sx={{ color: 'green' }}
                                                />
                                            ) : (
                                                <CancelIcon
                                                    sx={{ color: 'red' }}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {dispute.experian ? (
                                                <CheckCircleIcon
                                                    sx={{ color: 'green' }}
                                                />
                                            ) : (
                                                <CancelIcon
                                                    sx={{ color: 'red' }}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {dispute.trans_union ? (
                                                <CheckCircleIcon
                                                    sx={{ color: 'green' }}
                                                />
                                            ) : (
                                                <CancelIcon
                                                    sx={{ color: 'red' }}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {dispute.letter_name}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={() => {
                                                    if (
                                                        dispute.equifax_letter
                                                    ) {
                                                        setContent(
                                                            dispute.equifax_letter
                                                        );
                                                    } else {
                                                        setContent('');
                                                    }
                                                    handleOPen();
                                                }}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={() => {
                                                    if(dispute.experian_letter) {
                                                        setContent(
                                                            dispute.experian_letter
                                                        );
                                                    } else {
                                                        setContent('');
                                                    }
                                                    handleOPen();
                                                }}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={() => {
                                                    if(dispute.trans_union_letter) {
                                                        setContent(
                                                            dispute.trans_union_letter
                                                        );
                                                    } else {
                                                        setContent('');
                                                    }
                                                    handleOPen();
                                                }}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
            <>
                <RichTextModal
                    open={modalOpen}
                    handleClose={handleClose}
                    content={content}
                />
            </>
        </>
    );
};

export default DisputesPage;
