import { Box, Button } from '@mui/material';
import CircleProgress from '../components/ResultCircle';
import { useContext, useState } from 'react';
import { ResultCtx } from '../context/resultCtx';
import { useEffect } from 'react';
import Recomendation from '../components/Recomendation';
import dataRecomend from '../data/rekomendation';
import Loading from '../components/Loading';

const Result = () => {
  const { result } = useContext(ResultCtx);
  const [open, setOpen] = useState(false);
  const [bestResult, setBestResult] = useState({
    conclusion: 0,
    id: '',
    name: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [recomend, setRecomend] = useState();

  //   useEffect(() => {
  //     result.map((res) => {
  //       if (res.conclusion > bestResult.conclusion) {
  //         setBestResult(res);

  //         console.log(bestResult);
  //       }
  //     });
  //   }, []);

  const handleRekomendasi = () => {
    setIsLoading(true);
    let newRes = { conclusion: 0, id: '', name: '' };
    result.map((res, i) => {
      if (res.conclusion > newRes.conclusion) {
        newRes = res;
        console.log(res.conclusion, '>= ', newRes.conclusion);
      }
    });
    setTimeout(() => {
      dataRecomend.map((rek) => {
        if (rek.kode === newRes.id) {
          setRecomend({ ...rek, ...newRes });
        }
      });
    }, [3000]);

    setTimeout(() => {
      setOpen(true);
      setIsLoading(false);
    }, [5000]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {result.map((res, i) => {
          return (
            <CircleProgress
              key={i}
              color={'#FF5652'}
              name={res.name}
              percent={res.conclusion * 100}
            />
          );
        })}
      </Box>
      <Button variant="contained" onClick={() => handleRekomendasi()}>
        Tampilkan Rekomendasi
      </Button>

      {open && <Recomendation data={recomend} />}
      <Loading open={isLoading} />
    </Box>
  );
};

export default Result;
