import { Box, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const CircleProgress = ({ percent, color, name }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <div className="card-track">
        <div
          className="percent"
          style={{
            '--clr': color,
            '--num': percent < 100 ? percent : 100,
          }}>
          <dot className="dot"></dot>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>{percent} %</h2>
          </div>
        </div>
      </div>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: '600',
        }}>
        {name}
      </Typography>
    </Box>
  );
};

export default CircleProgress;
