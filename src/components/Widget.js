import React from 'react';
import { styled } from '@mui/system';
import { Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

const RootCard = styled(Card)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const Header = styled('div')({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem",
});

const Spacer = styled('div')({
  flexGrow: 1,
});

const Body = styled('div')({
  padding: "0.5rem",
  flexGrow: 1,
});


const widgetNames = {
  a: "Transcribe",
  b: "Árbol",
  c: "Hechos relevantes",
  d: "Notas de la sesión",
};

export default function Widget( props ) {
  
  const {id, onRemoveWidget } = props;

  return (
    <RootCard>
      <Header>
        <Typography variant="h6" gutterBottom>
          {widgetNames[id]}
        </Typography>
        <Spacer />
        <IconButton aria-label="delete" onClick={() => onRemoveWidget(id)}>
          <Close fontSize="small" />
        </IconButton>
      </Header>
      <Body />
    </RootCard>
  );
};

