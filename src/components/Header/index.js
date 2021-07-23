import React from 'react';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

export default function Header() {
  return (
    <div>
      <AppBar color="primary">
        <ToolBar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Material Ui Header
          </Typography>
          <Button>
            Login
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  )
}
