import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

const ScheduleMeeting = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const { email } = useSelector((store) => store.auth);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    checked: checked,
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
                Schedule meeting
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 300,
                    fontStyle: "italic",
                  }}
                >
                  Schedule a meeting via the link below{" "}
                </Typography>

                <a
                  href="https://www.credit.com/extracredit/adv/trackit2?ref_id=0c41a1ae-6540-47b7-9d92-fb6f60c1b97e&end_user_type=MARKET_PLACE&pl=blog&af=32806"
                  target="_blank"
                  onClick={() => setChecked(true)}
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "blue",
                      cursor: "pointer",
                      fontStyle: "italic",
                      border: "1px solid #ccc",
                      padding: "20px",
                    }}
                  >
                    Calendly.com/tgiscaleme
                  </Typography>
                </a>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default forwardRef(ScheduleMeeting);
