import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { docStateUpdate } from "../../../state/features/docs/docSlice";

const Experian = () => {
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
    creditstrong,
  } = useSelector((store) => store.docs);
  const { email } = useSelector((store) => store.auth);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  const link =
    "experian.com/consumer-products/score-boost.html?pc=sem_exp_google&cc=sem_exp_google_ad_1651407997_65972645920_379826966571_aud-942381786946:kwd-585063777506_e___k_CjwKCAjwpKyYBhB7EiwAU2Hn2c9Xv7mEBBfnOVL7BnMcCnuQU0kqDy3xvCwIhMBmS5ch6yWJL4dHpBoCSLUQAvD_BwE_k_&ref=brand&awsearchcpc=1&gclid=CjwKCAjwpKyYBhB7EiwAU2Hn2c9Xv7mEBBfnOVL7BnMcCnuQU0kqDy3xvCwIhMBmS5ch6yWJL4dHpBoCSLUQAvD_BwE";

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
          creditstrong,
          experian: checked,
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
        creditstrong,
        experian: checked,
      });
    }
  }, [
    boomplay,
    checked,
    consumer_office_freeze,
    creditstrong,
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
      href={link}
      target="_blank"
      onClick={() => setChecked(true)}
      rel="noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <ListItem
        secondaryAction={
          <Checkbox checked={checked} onChange={onChange} edge="end" />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemText primary="experian.com/consumer-products/" />
        </ListItemButton>
      </ListItem>
    </a>
  );
};

export default Experian;
