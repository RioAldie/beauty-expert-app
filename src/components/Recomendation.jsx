import { Box, Button, Typography } from '@mui/material';
import CircleProgress from './ResultCircle';

// eslint-disable-next-line react/prop-types
const Recomendation = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { conclusion, jenis, nama, pemakaian } = data;
  const { pagi, malam } = pemakaian;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <CircleProgress
          color={'#227880'}
          name={''}
          percent={conclusion * 100}
        />
        <Box>
          <Typography variant="body1" fontWeight={500}>
            Hasil kulit {conclusion * 100}% adalah{' '}
            <span style={{ fontWeight: 600, color: '#227880' }}>
              {jenis}
            </span>
          </Typography>
          <Typography variant="body" fontWeight={500}>
            Produk yang dianjurkan{' '}
            <span
              style={{
                fontWeight: 600,
                color: '#227880',
                fontSize: '24px',
              }}>
              {' '}
              {nama}
            </span>
          </Typography>
          <Typography variant="body1">
            Saran Penggunaan: <br />
            <span style={{ fontWeight: 600 }}>Pagi:</span> {pagi}{' '}
            <br />
            <span style={{ fontWeight: 600 }}>Malam:</span> {malam}
          </Typography>{' '}
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: 3 }}>
            Simpan
          </Button>
          <Button
            variant="outlined"
            color="success"
            sx={{ marginTop: 3, marginLeft: 3 }}>
            Ulang
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Recomendation;
