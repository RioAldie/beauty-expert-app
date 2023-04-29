import { Box, Button, Typography } from '@mui/material';
import Quest from '../components/Quest';
import questions from '../data/questions';
import { useContext, useEffect, useState } from 'react';
import { UserCtx } from '../context/userCtx';
import { dataSkin } from '../data/skin';
import Loading from '../components/Loading';
import ResultModal from '../components/ResultModal';
import { ResultCtx } from '../context/resultCtx';

const Home = () => {
  const { userValue } = useContext(UserCtx);
  const [setUserValueArr] = useState([]);
  const { setResult } = useContext(ResultCtx);
  const [open, setOpen] = useState(false);
  const [finalNormal, setFinalNormal] = useState();
  const [finalSensitif, setFInalSensitif] = useState();
  const [finalDewasa, setFinalDewasa] = useState();
  const [finalJerawat, setFinalJerawat] = useState();
  const [setIndex] = useState(2);
  const [isFinish, setIsFinish] = useState(false);
  let cfNormalArray = [];
  let cfSensitifArray = [];
  let cfBekasJerawatArray = [];
  let cfDewasaArray = [];
  const sliceUserValueIntoArray = async () => {
    setOpen(true);
    let newArr = [];
    userValue.map((v) => {
      newArr.push(v.value);
    });

    setUserValueArr(newArr);

    console.log(newArr.length);
    setTimeout(() => {
      console.log(newArr);
      getCF(newArr);
    }, [1000]);

    setTimeout(() => {
      countCFNormal(cfNormalArray);
      console.log('1');
    }, [1000]);
    setTimeout(() => {
      countCFJerawat(cfBekasJerawatArray);
      console.log('2');
    }, [1000]);
    setTimeout(() => {
      countCFDewasa(cfDewasaArray);
    }, [1000]);
    setTimeout(() => {
      countCFSensitif(cfSensitifArray);
    }, [1000]);

    setTimeout(() => {
      setOpen(false);
      setIsFinish(true);
    }, [5000]);
  };

  const getCF = (userArray) => {
    dataSkin.map((e, i) => {
      cfNormalArray.push(e.value[(i, 0)] * userArray[i]);
      cfSensitifArray.push(e.value[(i, 1)] * userArray[i]);
      cfBekasJerawatArray.push(e.value[(i, 2)] * userArray[i]);
      cfDewasaArray.push(e.value[(i, 3)] * userArray[i]);
    });
  };

  let i_normal = 2;
  let i_sensitif = 2;
  let i_dewasa = 2;
  let i_jerawat = 2;

  const countCFNormal = (data) => {
    let CFold = data[0] + data[1] * (1 - data[0]);

    // console.log('count');
    combineCFNormal(CFold, data);
  };
  const countCFSensitif = (data) => {
    let CFold = data[0] + data[1] * (1 - data[0]);

    // console.log('count');
    combineCFSensitif(CFold, data);
  };
  const countCFJerawat = (data) => {
    let CFold = data[0] + data[1] * (1 - data[0]);

    console.log(data);
    combineCFJerawat(CFold, data);
  };

  const countCFDewasa = (data) => {
    let CFold = data[0] + data[1] * (1 - data[0]);

    // console.log('count');
    combineCFDewasa(CFold, data);
  };

  const combineCFNormal = (old, next) => {
    let newOldCF = old + next[i_normal] * (1 - old);

    if (i_normal == 17) {
      i_normal = 2;
      return setFinalNormal(newOldCF);
    }
    if (i_normal <= next.length) {
      i_normal++;
      combineCFNormal(newOldCF, next);
    }
  };
  const combineCFSensitif = (old, next) => {
    let newOldCF = old + next[i_sensitif] * (1 - old);

    if (i_sensitif == 17) {
      i_sensitif = 2;
      return setFInalSensitif(newOldCF);
    }
    if (i_sensitif <= next.length) {
      i_sensitif++;
      combineCFSensitif(newOldCF, next);
    }
  };
  const combineCFJerawat = (old, next) => {
    let newOldCF = old + next[i_jerawat] * (1 - old);

    if (i_jerawat == 17) {
      i_jerawat = 2;

      return setFinalJerawat(newOldCF);
    }
    if (i_jerawat <= next.length) {
      i_jerawat++;
      combineCFJerawat(newOldCF, next);
    }
  };
  const combineCFDewasa = (old, next) => {
    let newOldCF = old + next[i_dewasa] * (1 - old);

    if (i_dewasa == 17) {
      i_dewasa = 2;
      return setFinalDewasa(newOldCF);
    }
    if (i_dewasa <= next.length) {
      i_dewasa++;
      combineCFDewasa(newOldCF, next);
    }
  };
  useEffect(() => {
    setResult([
      {
        conclusion: finalNormal,
        id: 'K01',
        name: 'Kulit Normal',
      },
      {
        conclusion: finalSensitif,
        id: 'K02',
        name: 'Kulit Sensitif',
      },
      {
        conclusion: finalJerawat,
        id: 'K03',
        name: 'Kulit Bekas Jerawat',
      },
      {
        conclusion: finalDewasa,
        id: 'K04',
        name: 'Kulit Dewasa',
      },
    ]);
  }, [finalNormal, finalJerawat, finalDewasa, finalSensitif]);

  return (
    <>
      <Loading open={open} />
      <ResultModal open={isFinish} setIsFinish={setIsFinish} />
      <Typography variant="body1" fontWeight={600} marginBottom={5}>
        Form Gejala
      </Typography>
      {questions.map((quest, i) => {
        // eslint-disable-next-line react/jsx-key
        return <Quest key={i} name={quest.name} kode={quest.kode} />;
      })}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '20px',
          marginTop: 5,
          marginBottom: 5,
        }}>
        <Button
          variant="contained"
          onClick={() => sliceUserValueIntoArray()}>
          Submit
        </Button>
        <Button
          variant="outlined"
          onClick={() => setIndex((prev) => prev + 1)}>
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default Home;
