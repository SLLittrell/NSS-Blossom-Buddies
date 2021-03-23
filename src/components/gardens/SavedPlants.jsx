import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom"
import {SavedPlantContext} from "../plants/SavedPlantProvider"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const SavedPlantDividers = ({myPlants}) => {
  const {removeSavedPlant}= useContext(SavedPlantContext)
  const classes = useStyles();

  const handleRemove =() =>{
    removeSavedPlant(myPlants?.id)
  }

  return (
    <List component="nav" className={classes.root} aria-label="helpers">
      <ListItem >
        <ListItemText button to={`/plants/details/${myPlants?.id}`} component={Link} primary={myPlants?.commonName} />  
        <button onClick={handleRemove}>Remove Plant</button>
      </ListItem>
    </List>
  );
}

