import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import ConsumerOffice from "./freezeaccount/ConsumerOffice";
import LexisNexis from "./freezeaccount/LexisNexis";
import ChexSystems from "./positiveacccountlinks/ChexSystems";
import ClarityServices from "./positiveacccountlinks/ClarityServices";
import Innovice from "./positiveacccountlinks/Innovice";
import Sagestreamilc from "./positiveacccountlinks/Sagestreamilc";
import SmartCredit from "./positiveacccountlinks/SmartCredit";
import api from "../../state/api/api";
import { useDispatch, useSelector } from "react-redux";

const FreezeAccount = (props, ref) => {
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

  const saveData = () => {
    setChecked(!checked);
    saveToDb();
  };

  const saveToDb = async () => {
    // console.log(!checked);

    try {
      const res = await api.put(`/docs/${email}`, {
        teletrack_freeze: !checked,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
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
                Freeze my account
              </Typography>
              <Typography variant="body2">
                Visit the following websites to freeze your account
              </Typography>
              <List
                dense
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ConsumerOffice />
                <LexisNexis />

                <Innovice />
                <ClarityServices />
                <ChexSystems />
                <Sagestreamilc />
                <SmartCredit />
                <ListItem
                  secondaryAction={
                    <Checkbox
                      onClick={saveData}
                      edge="end"
                      isChecked={checked}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary={`https://teletrackfreeze.corelogic.com/`}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
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

export default forwardRef(FreezeAccount);
