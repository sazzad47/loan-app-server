import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import ProofAdd from "../../assets/proof_add.png";

const ProofAddress = (props, ref) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
  }));

  const handleClose = () => {
    setOpen(false);
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
              <Button
                variant="contained"
                component="label"
                disableRipple
                sx={{
                  textTransform: "none",
                  ":hover": {
                    background: theme.palette.primary.light,
                  },
                }}
              >
                Upload image using computer
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button
                variant="contained"
                component="label"
                disableRipple
                sx={{
                  textTransform: "none",
                  ":hover": {
                    background: theme.palette.primary.light,
                  },
                }}
              >
                Use smartphone to take picture
                <input hidden accept="image/*" multiple type="file" />
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
