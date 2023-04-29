import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from '@mui/material';

import { useContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { MenuCtx } from '../context/menuCtx';

// eslint-disable-next-line react/prop-types
const InputSaveModal = ({ data }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(15);
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setActivate } = useContext(MenuCtx);
  const style = {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const handleSaveResult = () => {
    setIsLoading(true);
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    const date = `${day}-${month}-${year}`;

    const resdata = { ...data, name: name, age, date };

    handleSubmitReport(resdata);
  };

  const handleAlertSuccess = () => {
    setAlert(false);
    setActivate('Histori');
  };
  const reportsCollectionRef = collection(db, 'results');

  const handleSubmitReport = async (dataReport) => {
    try {
      await addDoc(reportsCollectionRef, dataReport).then((res) => {
        console.log(res);
        setIsLoading(false);
        setAlert(true);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {!alert && (
            <Box
              sx={{
                width: '500px',
                height: '300px',
                bgcolor: '#fff',
                color: '#000',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                padding: 5,
              }}>
              <TextField
                fullWidth
                id="name"
                label="Nama "
                type="text"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <TextField
                fullWidth
                id="old"
                label="Umur "
                type="number"
                variant="outlined"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
              {isLoading ? (
                <Button variant="outlined" disabled>
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => handleSaveResult()}>
                  Submit
                </Button>
              )}
            </Box>
          )}

          {alert && (
            <Box
              sx={{
                width: '500px',
                height: '300px',
                bgcolor: '#fff',
                color: '#000',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                padding: 5,
              }}>
              <Typography variant="h6">
                Penambahan Data Berhasil!
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleAlertSuccess()}>
                Lihat
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default InputSaveModal;
