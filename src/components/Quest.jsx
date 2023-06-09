import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { UserCtx } from '../context/userCtx';

const Quest = (props) => {
  const { userValue, setUserValue } = useContext(UserCtx);
  const { name, kode } = props;

  const handleValueChange = (userinput) => {
    userValue.map((val, i) => {
      if (val.kode == userinput.kode) {
        let objIndex = userValue.findIndex(
          (obj) => obj.kode == userinput.kode
        );

        return (userValue[objIndex].value = userinput.value);
      }
      // if (val.kode !== userinput.kode) {
      //   setUserValue((prev) => [...prev, userinput]);

      //   console.log('new');
      // }
    });

    if (userValue.length == 0) {
      return setUserValue((prev) => [...prev, userinput]);
    }

    let dup = userValue.find((x) => {
      return x.kode === userinput.kode;
    });

    if (dup === undefined) {
      return setUserValue((prev) => [...prev, userinput]);
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 5,
        padding: 2,
      }}>
      <Typography variant="body1">{name} ?</Typography>

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
        onChange={(e) =>
          handleValueChange({ kode: kode, value: e.target.value })
        }>
        <FormControlLabel value="1" control={<Radio />} label="Ya" />
        <FormControlLabel
          value="0"
          control={<Radio />}
          label="Tidak"
        />
      </RadioGroup>
    </Paper>
  );
};

export default Quest;
