import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import AddIcon from "@mui/icons-material/Add";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { v4 as uuid } from 'uuid';

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DangerousIcon from "@mui/icons-material/Dangerous";
import RichTextEditor from "./components/admin/RichTextEditor";
import UsersSelect from "./components/admin/UserSelect";
import LetterSelect from "./components/admin/LetterSelect";
import Paper from "@mui/material/Paper";
import Navigation from "./components/admin/Navigation";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Admin = () => {
  const routeNavigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if(disputeItems.length < 3) {
      setOpen(true)
    } else {
      alert('Not allowed');
    }
  };
  const handleClose = () => setOpen(false);
  const [higher, setHigher] = React.useState(false);
  const [account_no, setAccount_no] = React.useState("");
  const [equifax_report, setEquifaxReport] = React.useState();
  const [experian_report, setExperianReport] = React.useState();
  const [transUnion_report, setTransUnionReport] = React.useState();
  const [selectedUser, setSelectedUser] = React.useState(null);

  const [accounType, setAccountType] = React.useState('account_same');
  const [disputeItems, setDisputeItems] = React.useState([]);

  const [createLoading, setCreateLoading] = React.useState(false);

  const [equifax, setEquifax] = React.useState(false);
  const [experian, setExperian] = React.useState(false);
  const [transUnion, setTransUnion] = React.useState(false);

  const [reason, setReason] = React.useState("");
  const [instruction, setInstruction] = React.useState("");
  const [furnisher, setFurnisher] = React.useState("");
  const [accountNumber, setAccountNumber] = React.useState('');
  const [equifaxAccount, setEquifaxAccount] = React.useState('');
  const [experianAccount, setExperianAccount] = React.useState('');
  const [transUnionAccount, setTransUnionAccount] = React.useState('');

  const [isDisputeAdded, setIsDisputeAdded] = React.useState(false);

  const [selectedLetter, setSelectedLetter] = React.useState(null);

  const handleChange = () => console.log("first");

  const handleDeleteDispute = (id) => {

    let itemIndex;
    disputeItems.forEach((item, index) => {
      if(item.id === id) {
        itemIndex = index;
      }
    })
    
    if(itemIndex) {
      console.log('jk')
      let newItems = disputeItems;
      newItems.splice(itemIndex, 1);
      console.log(newItems);
      setDisputeItems(newItems);
    }

    
    // setIsDisputeAdded(false);
    // setEquifax(false);
    // setExperian(false);
    // setTransUnion(false);
    // setReason("");
    // setInstruction("");
    // setFurnisher("");
  };

  const handleFileChangeEquifax = (e) => {
    if (e.target.files) {
      setEquifaxReport(e.target.files[0]);
    }
  };
  const handleFileChangeExperian = (e) => {
    if (e.target.files) {
      setExperianReport(e.target.files[0]);
    }
  };
  const handleFileChangeTransUnion = (e) => {
    if (e.target.files) {
      setTransUnionReport(e.target.files[0]);
    }
  };

  const handleSelectDisputeItem = () => {
    if (!(experian || transUnion || equifax)) {
      alert("Select at least one credit Bureau ");
      return;
    }

    if (!reason) {
      alert("Fill in a reason to proceed");
      return;
    }

    const disputeItem = {
      id: uuid(),
      equifax: equifax,
      experian: experian,
      transUnion: transUnion,
      reason: reason,
      instruction: instruction,
      furnisher: furnisher,
      sameAccount: accounType === 'account_same',
      accountNumber: accountNumber,
      equifaxAccount: equifaxAccount,
      experianAccount: experianAccount,
      transUnionAccount: transUnionAccount
    };

    console.log(disputeItem);

    setDisputeItems([...disputeItems, disputeItem]);
    setIsDisputeAdded(true);
    setOpen(false);
    resetDisputeModal();
  };

  function resetDisputeModal() {
    setEquifax(false);
    setExperian(false);
    setTransUnion(false);
    setReason('');
    setInstruction('');
    setFurnisher('');
    setAccountNumber('');
    setEquifaxAccount('');
    setExperianAccount('');
    setTransUnionAccount('');
    setAccountType('account_same');
  }

  const saveDispute = async (letters) => {
    const url = BASE_URL + "/dispute";

    setCreateLoading(true);

    for(let dispute of disputeItems) {
      const formData = new FormData();

      formData.append("email", selectedUser.email);

      // reports
      formData.append("equifax_report", equifax_report);
      formData.append("experian_report", experian_report);
      formData.append("transUnion_report", transUnion_report);

      // info
      formData.append("reason", dispute.reason);
      formData.append("credit_furnisher", dispute.furnisher);
      formData.append("instruction", dispute.instruction);

      formData.append("equifax", dispute.equifax);
      formData.append("trans_union", dispute.transUnion);
      formData.append("experian", dispute.experian);

      // account numbers
      formData.append('account_number', dispute.accountNumber);
      formData.append('equifax_account', dispute.equifaxAccount);
      formData.append('experian_account', dispute.experianAccount);
      formData.append('transUnion_account', dispute.transUnionAccount);

      // letters
      formData.append("experian_letter", letters["experianLetter"]);
      formData.append("equifax_letter", letters["equifaxLetter"]);
      formData.append("trans_union_letter", letters["transUnionLetter"]);
      formData.append("letter_name", selectedLetter["Category Name"]);

      // persist the dispute

      try {
        const res = await fetch(url, {method: 'POST', body: formData});
        const resData = await res.json();
      }catch(e) {
        console.log(e);
      }

    }

    setCreateLoading(false);
    routeNavigate("/admin/disputes");

    // setCreateLoading(true);
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    //   // headers: {
    //   //     'Content-Type': 'multipart/form-data',
    //   // },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCreateLoading(false);
    //     routeNavigate("/admin/disputes");
    //   })
    //   .catch((err) => {
    //     setCreateLoading(false);
    //   });
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
          width: "60%",
          margin: "5px auto",
        }}
      >
        <div>
          <UsersSelect value={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
        <div>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Credit Reports
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Equifax
          </Typography>
          <Input
            variant="filled"
            type="file"
            onChange={handleFileChangeEquifax}
          />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Experian
          </Typography>
          <Input
            variant="filled"
            type="file"
            onChange={handleFileChangeExperian}
          />
          <Typography variant="h6" sx={{ mb: 1 }}>
            TransUnion
          </Typography>
          <Input
            variant="filled"
            type="file"
            onChange={handleFileChangeTransUnion}
          />
          <br />
        </div>
        <>
          {equifax_report &&
          selectedUser &&
          experian_report &&
          transUnion_report ? (
            <div>
              <h1>
                Letter Wizard -{" "}
                <span>{`${selectedUser.first_name} ${selectedUser.last_name}`}</span>
              </h1>
              <p>
                This is where you select items to dispute so you can build your
                letter. All new clients start with a Round 1 Dispute. Next "Add
                New Items" manually or "Add Saved/Pending Items." For editing or
                updating dispute items already saved, use the Dispute Items
                Page.
              </p>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid black",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1>Step 1:</h1> <h4> Choose Letter Type</h4>
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
                          display: "flex",
                          // flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <h4>Choose Letter Recipient (Round 2 Only)</h4>
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
                  marginTop: "20px",
                  padding: "20px",
                  border: "1px solid black",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1>Step 2:</h1> <h4> Choose Dispute Items</h4>
                </div>
                <div>
                  {isDisputeAdded && (
                    <TableContainer component={Paper} sx={{mb: 2}}>
                      <Table sx={{ minWidth: 1050 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Creditor/Furnisher</TableCell>
                            <TableCell>Account</TableCell>
                            <TableCell>Dispute Items</TableCell>
                            <TableCell>Equifax</TableCell>
                            <TableCell>Experian</TableCell>
                            <TableCell>TransUnion</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {React.Children.toArray(disputeItems.map(item => (
                            <TableRow>
                              <TableCell>{item.furnisher}</TableCell>
                              <TableCell>Equifax, Exparian, Transunion</TableCell>
                              <TableCell>{item.reason}</TableCell>
                              <TableCell>
                                {item.equifax && <NegativeDisplay />}
                              </TableCell>
                              <TableCell>
                                {item.experian && <NegativeDisplay />}
                              </TableCell>
                              <TableCell>
                                {item.transUnion && <NegativeDisplay />}
                              </TableCell>
                              <TableCell>
                                <IconButton onClick={() => handleDeleteDispute(item.id)}>
                                  <DeleteIcon color="primary" fontSize="large" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          )))}
                          {/* <TableRow>
                            <TableCell>{furnisher}</TableCell>
                            <TableCell>Equifax, Exparian, Transunion</TableCell>
                            <TableCell>{reason}</TableCell>
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
                                <DeleteIcon color="primary" fontSize="large" />
                              </IconButton>
                            </TableCell>
                          </TableRow> */}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        onClick={handleOpen}
                        startIcon={<AddIcon />}
                      >
                        Add New Dispute Item
                      </Button>
                    </Stack>
                 
                </div>
              </div>

              {isDisputeAdded && (
                <>
                  <LetterSelect
                    value={selectedLetter}
                    setSelectedLetter={setSelectedLetter}
                  />
                  {selectedLetter && (
                    <RichTextEditor
                      data={selectedLetter.letter}
                      selectedUser={selectedUser}
                      equifax={equifax}
                      experian={experian}
                      transUnion={transUnion}
                      saveDispute={saveDispute}
                      createLoading={createLoading}
                    />
                  )}
                </>
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
                        display: "flex",
                        marginTop: "20px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h4>
                          Select Credit Bureaus{" "}
                          <span style={{ color: "red" }}>*</span>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={equifax}
                                  onChange={(e) => setEquifax(!equifax)}
                                />
                              }
                              label="Equifax"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={experian}
                                  onChange={() => setExperian(!experian)}
                                />
                              }
                              label="Experian"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={transUnion}
                                  onChange={() => setTransUnion(!transUnion)}
                                />
                              }
                              label="TransUnion"
                            />
                          </FormGroup>
                        </h4>

                        <div>
                          <FormControl>
                            <p>Account Number (optional)</p>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={accounType}
                              onChange={(e) => setAccountType(e.target.value)}
                            >
                              <FormControlLabel
                                value="account_same"
                                control={<Radio />}
                                label="Same for all bureaus
                              "
                              />
                              <FormControlLabel
                                value="account_different"
                                control={<Radio />}
                                label="Different for each bureau
                              "
                              />
                            </RadioGroup>
                          </FormControl>
                          <Box>
                            {accounType === 'account_same' && (
                              <TextField 
                                size="small" 
                                placeholder="Acc no" 
                                sx={{mb: 1}} 
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                              />
                            )}
                            {accounType === 'account_different' && (
                              <>
                                <TextField 
                                  size="small" 
                                  placeholder="Equifax Acc no" 
                                  sx={{mb: 1}} 
                                  value={equifaxAccount}
                                  onChange={(e) => setEquifaxAccount(e.target.value)
                                    }
                                />
                                <TextField 
                                  size="small" 
                                  placeholder="Equifax Acc no" 
                                  sx={{mb: 1}} 
                                  value={experianAccount}
                                  onChange={(e) => setExperianAccount(e.target.value)}
                                />
                                <TextField 
                                  size="small" 
                                  placeholder="TransUnion Acc no" 
                                  sx={{mb: 1}}
                                  value={transUnionAccount}
                                  onChange={(e) => setTransUnionAccount(e.target.value)}
                                />
                              </>
                            )}
                          </Box>
                        </div>
                      </div>

                      <div
                        style={{
                          flex: 1,
                          marginTop: "20px",
                        }}
                      >
                        <div
                          style={{
                            marginTop: "15px",
                          }}
                        >
                          <TextField
                            id="outlined-required"
                            label="Credit/Furnisher"
                            placeholder="Company name"
                            value={furnisher}
                            onChange={(e) => setFurnisher(e.target.value)}
                          />
                        </div>

                        <div
                          style={{
                            marginTop: "15px",
                          }}
                        >
                          <TextField
                            required
                            id="outlined-required"
                            label="Reason"
                            placeholder="Provide reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                          />
                        </div>
                        <div
                          style={{
                            marginTop: "15px",
                          }}
                        >
                          <TextField
                            id="outlined-required"
                            label="Instruction"
                            placeholder="Instruction"
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
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
            ""
          )}
        </>
      </div>
    </div>
  );
};

function NegativeDisplay() {
  return (
    <>
      <Stack direction="column" alignItems={"start"}>
        <IconButton>
          <DangerousIcon
            sx={{
              color: "red",
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
