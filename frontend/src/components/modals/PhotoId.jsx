import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProofID from "../../assets/proof_id.png";
import { docStateUpdate } from "../../state/features/docs/docSlice";

const PhotoId = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [photo_ID, setPhotoID] = useState(null);
  // const [fileContent, setPhotoIDContent] = useState(null);
  const theme = useTheme();
  const dispatch = useDispatch();

  const {
    proof_of_address,
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
        checked,
      };
    },
    [checked]
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setPhotoID(selectedFile);
  };

  useEffect(() => {
    if (photo_ID) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [photo_ID]);

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
                Upload Photo ID
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
                  }}
                >
                  <li style={{ fontSize: "16px" }}>Driver's license</li>
                  <li style={{ fontSize: "16px" }}>State ID card</li>
                  <li style={{ fontSize: "16px" }}>
                    Other government issued photo ID card
                  </li>
                </ul>
              </Box>
              <Box>
                <img height={200} src={ProofID} alt="proof id" />
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
                name="photo_ID"
                onChange={handleFileSelect}
                size="small"
              />
              <Button
                variant="contained"
                disabled={!photo_ID}
                color="primary"
                size="small"
                sx={{
                  textTransform: "none",
                }}
                onClick={() => {
                  dispatch(
                    docStateUpdate({
                      photo_ID,
                      email,
                      proof_of_address,
                      user_agreement_freeze,
                      consumer_office_freeze,
                      lexis_nexis_freeze,
                      positive_account,
                    })
                  );
                  setChecked(true);
                  handleClose();
                }}
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

export default forwardRef(PhotoId);
