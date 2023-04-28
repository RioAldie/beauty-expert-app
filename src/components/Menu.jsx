import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';

import AssignmentIcon from '@mui/icons-material/Assignment';
import { Divider, List } from '@mui/material';

const ListMenu = (props) => {
  const { active, setActive } = props;
  return (
    <List component="nav">
      <ListItemButton onClick={() => setActive('Home')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton onClick={() => setActive('Gejala')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={() => setActive('Result')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Result" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Statistik" />
      </ListItemButton>
    </List>
  );
};

export default ListMenu;
