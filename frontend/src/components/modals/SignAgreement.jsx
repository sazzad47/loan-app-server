import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { docStateUpdate } from "../../state/features/docs/docSlice";

const SignAgreement = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [signed, setSigned] = useState(false);
  const [checked, setChecked] = useState(false);

  const theme = useTheme();
  const dispatch = useDispatch();

  const {
    photo_ID,
    proof_of_address,
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

  const onChange = () => {
    setSigned((prev) => !prev);
  };

  useEffect(() => {
    if (signed) {
      dispatch(
        docStateUpdate({
          photo_ID,
          email,
          proof_of_address,
          user_agreement_freeze: signed,
          consumer_office_freeze,
          lexis_nexis_freeze,
          positive_account,
        })
      );
    }
  });

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
                Sign agreement
              </Typography>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="sign-agreement"
                      checked={signed}
                      onChange={onChange}
                    />
                  }
                  label="I agree to terms and conditions."
                />
              </Grid>
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

export default forwardRef(SignAgreement);

/* 
1. Linked Lists
2. Stacks
3. Queues
4. Arrays
5. Strings
6. Trees
7. Hashtables
8. Graphs
*/
