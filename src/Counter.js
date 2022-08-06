import { useState } from "react";
//import IconButton from '@mui/material/IconButton';
//import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export function Counter() {
    const [value, setValue] = useState(0);
  return (
    <div className="counter-container">
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          <div className="rating">
          <Rating name="no-value" value={null} />
          </div>
        }}
      />
    </div>
  );
}
