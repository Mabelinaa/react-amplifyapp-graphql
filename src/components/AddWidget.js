import React from 'react';
import { styled } from '@mui/material';
import Popover from '@mui/material/Popover';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const useStyles = styled((theme) => ({
  popup: {
    padding: theme.spacing(2)
  }
}));

const widgetNames = {
  a: "Transcribe",
  b: "Árbol",
  c: "Hechos relevantes",
  d: "Notas de la sesión"
};

function AddWidget({ widgets, onRemoveWidget, onAddWidget, originalWidgets }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleChange = (e) => {
    if (e.target.checked) {
      onAddWidget(e.target.name);
    } else {
      onRemoveWidget(e.target.name);
    }
  };

  return (
    <>
      <IconButton aria-label="add" onClick={handleClick} aria-describedby={id}>
        <AddCircleOutlineIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div className={classes.popup}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Widgets</FormLabel>
            <FormGroup>
              {Array.isArray(originalWidgets) && originalWidgets.map((i) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={widgets.includes(i)}
                      onChange={handleChange}
                      name={i}
                    />
                  }
                  label={widgetNames[i]}
                  key={i}
                />
              ))}
            </FormGroup>
          </FormControl>
        </div>
      </Popover>
    </>
  );
}

export default AddWidget;
