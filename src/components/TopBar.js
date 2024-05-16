import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import AddWidget from './AddWidget';

const CustomCard = styled(Card)({
  padding: 1,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end"
})

export default function TopBar({
  onLayoutSave,
  widgets,
  onRemoveWidget,
  onAddWidget,
  originalWidgets
}) {

  return (
    <CustomCard> 
      <AddWidget
        widgets={widgets}
        onRemoveWidget={onRemoveWidget}
        onAddWidget={onAddWidget}
        originalWidgets={originalWidgets}
      />
      <IconButton aria-label="save" onClick={onLayoutSave}>
        <SaveIcon />
      </IconButton>
    </CustomCard>
  );
};


