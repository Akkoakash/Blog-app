import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function AddPlace( ) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const history = useHistory();
  return(
  <div className="add-place-form">
     <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
      <TextField type="text" label="Poster" onChange={(event) => setPoster(event.target.value)} />
      <TextField type="text" label="Summary" onChange={(event) => setSummary(event.target.value)} />
   
    <Button onClick={() => {
      const newPlace = {
        name: name,
        poster: poster,
        summary: summary,
      };

      fetch(`${API}/blog/`,{
        method: "POST",
        body: JSON.stringify(newPlace),
        headers:{"Content-Type": "application/json",
      },
      }).then(() => history.push("/blog"));
     
    }} 
    variant="contained">Add Place</Button>
  </div>
  );
}
