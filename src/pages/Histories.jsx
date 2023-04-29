import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

export default function Histories() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const CellStyled = styled(TableCell)({
    textAlign: 'center',
    minWidth: 200,
    maxWidth: 500,
  });
  const reportCollection = collection(db, 'results');
  useEffect(() => {
    const getReportList = async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(reportCollection);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setData(filteredData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    getReportList();
  }, []);
  return (
    <>
      <Loading open={isLoading} />
      {!isLoading && (
        <TableContainer
          component={Paper}
          sx={{ maxWidth: { xs: '100%', md: '100%' } }}>
          {data != null && (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#FF0032', color: '#fff' }}>
                  <CellStyled sx={{ color: '#fff' }}>No.</CellStyled>
                  <CellStyled sx={{ color: '#fff' }}>Nama</CellStyled>
                  <CellStyled sx={{ color: '#fff' }}>Umur</CellStyled>
                  <CellStyled sx={{ color: '#fff' }}>
                    Nilai Kemungkinan
                  </CellStyled>
                  <CellStyled sx={{ color: '#fff' }}>
                    Jenis Kulit
                  </CellStyled>
                  <CellStyled sx={{ color: '#fff' }}>
                    Saran Paket
                  </CellStyled>
                  <CellStyled sx={{ color: '#fff' }}>
                    Saran Pemakaian Pagi
                  </CellStyled>
                  <CellStyled sx={{ color: '#fff' }}>
                    Saran Pemakaian Malam
                  </CellStyled>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, i) => {
                  return (
                    <TableRow
                      key={i}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0,
                        },
                      }}>
                      <CellStyled
                        component="th"
                        scope="row"
                        sx={{
                          fontWeight: 600,
                        }}>
                        {i + 1}
                      </CellStyled>
                      <CellStyled>{row.name}</CellStyled>
                      <CellStyled>{row.age}</CellStyled>
                      <CellStyled>{row.conclusion * 100}%</CellStyled>
                      <CellStyled>{row.jenis}</CellStyled>
                      <CellStyled>{row.nama}</CellStyled>
                      <CellStyled>{row.pemakaian.pagi}</CellStyled>
                      <CellStyled>{row.pemakaian.malam}</CellStyled>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      )}
    </>
  );
}
