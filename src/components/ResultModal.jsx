import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

const ResultModal = (props) => {
  const { open } = props;

  const style = {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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

          <Button variant="contained">Lihat Hasil</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ResultModal;
