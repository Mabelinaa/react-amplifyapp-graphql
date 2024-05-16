import React from 'react';
import Card from '@mui/material/Card';
import styled from '@emotion/styled/macro';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import AddWidget from './AddWidget';

const useStyles = styled((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  }
}));
export default function TopBar({
  onLayoutSave,
  widgets,
  onRemoveWidget,
  onAddWidget,
  originalWidgets
}) {

  const classes = useStyles();

  return (
    <Card className={classes.root}> 
      <AddWidget
        widgets={widgets}
        onRemoveWidget={onRemoveWidget}
        onAddWidget={onAddWidget}
        originalWidgets={originalWidgets}
      />
      <IconButton aria-label="save" onClick={onLayoutSave}>
        <SaveIcon />
      </IconButton>
    </Card>
  );
};


