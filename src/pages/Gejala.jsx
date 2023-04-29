import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import questions from '../data/questions';

export default function DataGejala() {
  const data = questions;

  const CellStyled = styled(TableCell)({
    textAlign: 'center',
    minWidth: 200,
    maxWidth: 500,
  });

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: { xs: '100%', md: '100%' } }}>
      {data != null && (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: '#FF0032', color: '#fff' }}>
              <CellStyled sx={{ color: '#fff' }}>Kode</CellStyled>
              <CellStyled sx={{ color: '#fff' }}>Gejala</CellStyled>
              <CellStyled sx={{ color: '#fff' }}>
                Kulit Normal
              </CellStyled>
              <CellStyled sx={{ color: '#fff' }}>
                Kulit Sensitif
              </CellStyled>
              <CellStyled sx={{ color: '#fff' }}>
                Kulit Bekas Jerawat
              </CellStyled>
              <CellStyled sx={{ color: '#fff' }}>
                Kulit Dewasa
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
                    {row.kode}
                  </CellStyled>
                  <CellStyled>{row.name}</CellStyled>
                  <CellStyled>{row.value[0]}</CellStyled>
                  <CellStyled>{row.value[1]}</CellStyled>
                  <CellStyled>{row.value[2]}</CellStyled>
                  <CellStyled>{row.value[3]}</CellStyled>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
