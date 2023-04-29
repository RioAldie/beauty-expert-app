import { Box, Button } from '@mui/material';
import CircleProgress from '../components/ResultCircle';
import { useContext, useState } from 'react';
import { ResultCtx } from '../context/resultCtx';
import { addDoc, collection } from 'firebase/firestore';
import Recomendation from '../components/Recomendation';
import dataRecomend from '../data/rekomendation';
import Loading from '../components/Loading';
import { db } from '../firebase';
import InputSaveModal from '../components/InputSaveModal';

const Result = () => {
  const { result } = useContext(ResultCtx);
  const [open, setOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);
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

  const reportsCollectionRef = collection(db, 'results');

  const handleSubmitReport = async (dataReport) => {
    try {
      setIsLoading(true);
      await addDoc(reportsCollectionRef, dataReport).then((res) => {
        console.log(res);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleRekomendasi = () => {
    setIsLoading(true);
    let newRes = { conclusion: 0, id: '', name: '' };
    result.map((res, i) => {
      if (res.conclusion > newRes.conclusion) {
        newRes = res;
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
        gap: 5,
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
      {open && (
        <Box>
          <Button
            variant="contained"
            color="success"
            onClick={() => setIsSave(true)}>
            Simpan
          </Button>
          <Button
            variant="outlined"
            color="success"
            sx={{ marginLeft: 3 }}>
            Ulang
          </Button>
        </Box>
      )}
      {isSave && <InputSaveModal data={recomend} />}
    </Box>
  );
};

export default Result;
