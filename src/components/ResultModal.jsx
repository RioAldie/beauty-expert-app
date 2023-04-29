import { Box, Button, Modal, Typography } from '@mui/material';
import { useContext } from 'react';
import { MenuCtx } from '../context/menuCtx';

const ResultModal = (props) => {
  const { open, setIsFinish } = props;
  const { setActivate } = useContext(MenuCtx);
  const style = {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const handleAction = () => {
    setIsFinish(false);
    setActivate('Result');
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box
          sx={{
            width: '500px',
            height: '200px',
            bgcolor: '#fff',
            color: '#000',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          <Typography variant="h6">Penghitungan Selesai</Typography>

          <Button variant="contained" onClick={() => handleAction()}>
            Lihat Hasil
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ResultModal;
