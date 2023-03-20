import { TextField, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProofAdd from "../../assets/proof_add.png";
import { docStateUpdate } from "../../state/features/docs/docSlice";
import api from "../../state/api/api";

const ProofAddress = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [proof_of_address, setProofOfAddress] = useState(null);
  // const [fileContent, setFileContent] = useState(null);
  const theme = useTheme();

  const dispatch = useDispatch();

  const {
    photo_ID,
    user_agreement_freeze,
    consumer_office_freeze,
    lexis_nexis_freeze,
    positive_account,
  } = useSelector((store) => store.docs);
  const { email } = useSelector((store) => store.auth);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          setOpen(true);
        },
        checked: checked,
      };
    },
    [checked]
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setProofOfAddress(selectedFile);
  };

  const saveData = async () => {
    if (photo_ID) {
      try {
        const res = await api.put(`/docs/${email}`, {
          proof_of_address: `uploads/${email}-${Date.now()}-${
            proof_of_address.name
          }`,
        });
        setChecked(true);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      setChecked(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  fontWeight: 800,
                  color: theme.palette.grey[800],
                }}
              >
                Upload Proof of Address
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Box>
                <Typography variant="body2">
                  If you like, you can take a photo of these with your
                  <br /> phone and upload it here.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  This can be a:
                </Typography>
                <ul
                  sx={{
                    marginTop: 0,
                    font: "inherit",
                  }}
                >
                  <li style={{ fontSize: "16px" }}>Utility bill</li>
                  <li style={{ fontSize: "16px" }}>Bank statement</li>
                  <li style={{ fontSize: "16px" }}>Insurance statement</li>
                  <li style={{ fontSize: "16px" }}>
                    Something official addressed to you at the address you've
                    given us
                  </li>
                </ul>
              </Box>
              <Box>
                <img height={200} src={ProofAdd} alt="proof add" />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                gap: "10px",
              }}
            >
              <TextField
                type="file"
                name="proof_of_address"
                onChange={handleFileSelect}
                size="small"
              />
              <Button
                variant="contained"
                disabled={!proof_of_address}
                color="primary"
                size="small"
                sx={{
                  textTransform: "none",
                }}
                onClick={saveData}
              >
                Upload
              </Button>
            </Box>
          </Box>
        </DialogContent>
        {/*  <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default forwardRef(ProofAddress);
