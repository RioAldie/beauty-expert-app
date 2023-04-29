import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';

import AssignmentIcon from '@mui/icons-material/Assignment';

import { useContext } from 'react';
import { MenuCtx } from '../context/menuCtx';
import { List } from '@mui/material';

const ListMenu = () => {
  const { setActivate } = useContext(MenuCtx);
  return (
    <List component="nav">
      <ListItemButton onClick={() => setActivate('Home')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton onClick={() => setActivate('Gejala')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={() => setActivate('Result')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Result" />
      </ListItemButton>
      <ListItemButton onClick={() => setActivate('Histori')}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Histori" />
      </ListItemButton>
    </List>
  );
};

export default ListMenu;
