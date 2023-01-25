import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Delete';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DangerousIcon from '@mui/icons-material/Dangerous';
import RichTextEditor from './components/admin/RichTextEditor';
import UsersSelect from './components/admin/UserSelect';
import LetterSelect from './components/admin/LetterSelect';
import Paper from '@mui/material/Paper';
import Navigation from './components/admin/Navigation';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Admin = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [higher, setHigher] = React.useState(false);
    const [account_no, setAccount_no] = React.useState('');
    const [creditReport, setCreditReport] = React.useState();
    const [selectedUser, setSelectedUser] = React.useState(null);

    const [equifax, setEquifax] = React.useState(false);
    const [experian, setExperian] = React.useState(false);
    const [transUnion, setTransUnion] = React.useState(false);

    const [reason, setReason] = React.useState('');
    const [instruction, setInstruction] = React.useState('');
    const [furnisher, setFurnisher] = React.useState('');

    const [isDisputeAdded, setIsDisputeAdded] = React.useState(false);

    const [selectedLetter, setSelectedLetter] = React.useState(null);

    const handleChange = () => console.log('first');

    const handleDeleteDispute = () => {
        setIsDisputeAdded(false);
        setEquifax(false);
        setEquifax(false);
        setTransUnion(false);
    }

    const handleFileChange = e => {
        if (e.target.files) {
            setCreditReport(e.target.files[0]);
        }
    };

    const handleSelectDisputeItem = () => {
        if (!(experian || transUnion || equifax)) {
            alert('Select at least one credit Bureau ');
            return;
        }

        if (!reason) {
            alert('Fill in a reason to proceed');
            return;
        }

        setIsDisputeAdded(true);
        setOpen(false);
    };

    return (
        <div>
            <Box
                sx={{
                    mb: 3,
                }}
            >
                <Navigation />
            </Box>
            <div
                style={{
                    width: '60%',
                    margin: '5px auto',
                }}
            >
                <div>
                    <UsersSelect
                        value={selectedUser}
                        setSelectedUser={setSelectedUser}
                    />
                </div>
                <div>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        Credit Report
                    </Typography>
                    <Input
                        variant="filled"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <br />
                </div>
                <>
                    {creditReport ? (
                        <div>
                            <h1>
                                Letter Wizard <span>(Aboubakar Camara)</span>
                            </h1>
                            <p>
                                This is where you select items to dispute so you
                                can build your letter. All new clients start
                                with a Round 1 Dispute. Next "Add New Items"
                                manually or "Add Saved/Pending Items." For
                                editing or updating dispute items already saved,
                                use the Dispute Items Page.
                            </p>
                            <div
                                style={{
                                    padding: '20px',
                                    border: '1px solid black',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        // flexDirection: "column",
                                        alignItems: 'center',
                                    }}
                                >
                                    <h1>Step 1:</h1>{' '}
                                    <h4> Choose Letter Type</h4>
                                </div>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Basic Dispute"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="Basic Dispute"
                                            control={<Radio />}
                                            onClick={() => setHigher(false)}
                                            label="Round 1: Basic Dispute - Credit Bureaus"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio />}
                                            onClick={() => setHigher(true)}
                                            label="Round 2 or Higher: All Other Letters - Credit Bureaus, Creditors/Furnishers, or Collectors
                      "
                                        />
                                    </RadioGroup>
                                </FormControl>

                                {higher ? (
                                    <>
                                        <div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    // flexDirection: "column",
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <h4>
                                                    Choose Letter Recipient
                                                    (Round 2 Only)
                                                </h4>
                                            </div>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="Basic Dispute"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="Credit Bureau"
                                                        control={<Radio />}
                                                        label="Credit Bureau"
                                                    />
                                                    <FormControlLabel
                                                        value="Creditor Reporting"
                                                        control={<Radio />}
                                                        label="Creditor/Furnisher Reporting the Item"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    border: '1px solid black',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        // flexDirection: "column",
                                        alignItems: 'center',
                                    }}
                                >
                                    <h1>Step 2:</h1>{' '}
                                    <h4> Choose Dispute Items</h4>
                                </div>
                                <div>
                                    {isDisputeAdded ? (
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 1050 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            Creditor/Furnisher
                                                        </TableCell>
                                                        <TableCell>
                                                            Account
                                                        </TableCell>
                                                        <TableCell>
                                                            Dispute Items
                                                        </TableCell>
                                                        <TableCell>
                                                            Equifax
                                                        </TableCell>
                                                        <TableCell>
                                                            Experian
                                                        </TableCell>
                                                        <TableCell>
                                                            TransUnion
                                                        </TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell></TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>
                                                          {equifax && <NegativeDisplay />}
                                                        </TableCell>
                                                        <TableCell>
                                                            {experian && <NegativeDisplay />}
                                                        </TableCell>
                                                        <TableCell>
                                                          {transUnion && <NegativeDisplay />}
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton onClick={handleDeleteDispute}>
                                                                <DeleteIcon
                                                                    color="primary"
                                                                    fontSize="large"
                                                                />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    ) : (
                                        <Stack direction="row" spacing={2}>
                                            <Button
                                                variant="contained"
                                                onClick={handleOpen}
                                                startIcon={<AddIcon />}
                                            >
                                                Add New Dispute Item
                                            </Button>
                                        </Stack>
                                    )}
                                </div>
                            </div>

                            <LetterSelect
                                value={selectedLetter}
                                setSelectedLetter={setSelectedLetter}
                            />
                            {selectedLetter && (
                                <RichTextEditor data={selectedLetter.letter} />
                            )}

                            {/* <Button onClick={handleOpen}>Open modal</Button> */}
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography
                                            id="transition-modal-title"
                                            variant="h4"
                                            component="h2"
                                        >
                                            Add New Dispute Item
                                        </Typography>
                                        <div
                                            style={{
                                                display: 'flex',
                                                marginTop: '20px',
                                            }}
                                        >
                                            <div style={{ flex: 1 }}>
                                                <h4>
                                                    Select Credit Bureaus{' '}
                                                    <span
                                                        style={{ color: 'red' }}
                                                    >
                                                        *
                                                    </span>
                                                    <FormGroup>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={
                                                                        equifax
                                                                    }
                                                                    onChange={e =>
                                                                        setEquifax(
                                                                            !equifax
                                                                        )
                                                                    }
                                                                />
                                                            }
                                                            label="Equifax"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={
                                                                        experian
                                                                    }
                                                                    onChange={() =>
                                                                        setExperian(
                                                                            !experian
                                                                        )
                                                                    }
                                                                />
                                                            }
                                                            label="Experian"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={
                                                                        transUnion
                                                                    }
                                                                    onChange={() =>
                                                                        setTransUnion(
                                                                            !transUnion
                                                                        )
                                                                    }
                                                                />
                                                            }
                                                            label="TransUnion"
                                                        />
                                                    </FormGroup>
                                                </h4>

                                                <div>
                                                    <FormControl>
                                                        <p>
                                                            Account Number
                                                            (optional)
                                                        </p>
                                                        <RadioGroup
                                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                                            name="controlled-radio-buttons-group"
                                                            value={account_no}
                                                            onChange={
                                                                handleChange
                                                            }
                                                        >
                                                            <FormControlLabel
                                                                value="account_same"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="Same for all bureaus
                              "
                                                            />
                                                            <FormControlLabel
                                                                value="account_different"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="Different for each bureau
                              "
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            </div>

                                            <div
                                                style={{
                                                    flex: 1,
                                                    marginTop: '20px',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        marginTop: '15px',
                                                    }}
                                                >
                                                    <TextField
                                                        id="outlined-required"
                                                        label="Credit/Furnisher"
                                                        placeholder="Company name"
                                                        value={furnisher}
                                                        onChange={e =>
                                                            setFurnisher(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div
                                                    style={{
                                                        marginTop: '15px',
                                                    }}
                                                >
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Reason"
                                                        placeholder="Provide reason"
                                                        value={reason}
                                                        onChange={e =>
                                                            setReason(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        marginTop: '15px',
                                                    }}
                                                >
                                                    <TextField
                                                        id="outlined-required"
                                                        label="Instruction"
                                                        placeholder="Instruction"
                                                        value={instruction}
                                                        onChange={e =>
                                                            setInstruction(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="contained"
                                            onClick={handleSelectDisputeItem}
                                        >
                                            Next
                                        </Button>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    ) : (
                        ''
                    )}
                </>
            </div>
        </div>
    );
};

function NegativeDisplay() {
    return (
        <>
            <Stack direction="column" alignItems={'start'}>
                <IconButton>
                    <DangerousIcon
                        sx={{
                            color: 'red',
                        }}
                        fontSize="large"
                    />
                </IconButton>
                <Typography variant="body1">Negative</Typography>
            </Stack>
        </>
    );
}

export default Admin;
