import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { docStateUpdate } from "../../../state/features/docs/docSlice";

const CreditStrong = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const {
    photo_ID,
    proof_of_address,
    user_agreement_freeze,
    lexis_nexis_freeze,

    consumer_office_freeze,
    boomplay,
    kikoff,
    self,
  } = useSelector((store) => store.docs);
  const { email } = useSelector((store) => store.auth);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    if (checked) {
      dispatch(
        docStateUpdate({
          photo_ID,
          email,
          proof_of_address,
          user_agreement_freeze,
          consumer_office_freeze,
          lexis_nexis_freeze,

          boomplay,
          kikoff,
          self,
          creditstrong: checked,
        })
      );
    } else {
      docStateUpdate({
        photo_ID,
        email,
        proof_of_address,
        user_agreement_freeze,
        consumer_office_freeze,
        lexis_nexis_freeze,

        boomplay,
        kikoff,
        self,
        creditstrong: checked,
      });
    }
  }, [
    boomplay,
    checked,
    consumer_office_freeze,
    dispatch,
    email,
    kikoff,
    lexis_nexis_freeze,
    photo_ID,

    proof_of_address,
    self,
    user_agreement_freeze,
  ]);

  return (
    <a
      href="https://www.creditstrong.com/"
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <ListItem
        secondaryAction={
          <Checkbox
            onClick={() => setChecked(!checked)}
            onChange={onChange}
            edge="end"
          />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemText primary="https://www.creditstrong.com/" />
        </ListItemButton>
      </ListItem>
    </a>
  );
};

export default CreditStrong;
