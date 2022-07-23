import { Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import { useHistory } from "react-router-dom";

export function Blog({ name, poster, summary, deleteButton, id, editButton }) {
 
  const [show, setShow] = useState(true);
  const history = useHistory();
  return (
    <Card className='blog-container'>
      <img src={poster} alt={name} className="blog-poster" />
     <CardContent>
      <div className='blog-specs'>
        <h2 className='blog-name'>{name}
        <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        </h2>
        </div>
        {show ? <p className="blog-summary">{summary}</p> : ""}
     
      </CardContent>
      <CardActions>
       <Counter/>{deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
