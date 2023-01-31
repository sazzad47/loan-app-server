import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { forwardRef, useEffect, useState } from "react";
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
    <Box sx={{ marginTop: "10px" }}>
      <Typography
        variant="h6"
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
