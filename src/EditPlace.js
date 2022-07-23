import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";


export function EditPlace({movieList, setMovieList}) {
  const {id} = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
   fetch(`${API}/blog/${id}`,{
    method: "GET",
})
.then((data) => data.json())
.then((mv) => setPlace(mv))
.catch((err) => console.log(err));
  }, []);
  
  console.log(place);

  return(
  <div>
    {place ? <EditPlaceForm place={place}/> : <h2>Loading</h2>}
  </div>
  );
}

function EditPlaceForm({place}){
  const [name, setName] = useState(place.name);
  const [poster, setPoster] = useState(place.poster);
  const [summary, setSummary] = useState(place.summary);
  const history = useHistory();
  
  return(
    <div className="add-place-form">
     <TextField 
     value={name}
     onChange={(event) => setName(event.target.value)}
      label="Name" 
      variant="outlined" />
      <TextField 
      value={poster}
      type="text"
       label="Poster" 
       onChange={(event) => setPoster(event.target.value)} />
     
      <TextField 
      value={summary}
      type="text" 
      label="Summary" 
      onChange={(event) => setSummary(event.target.value)} />
   
    <Button onClick={() => {
      const updatedPlace = {
        name: name,
        poster: poster,
        summary: summary,
      };
      fetch(`${API}/blog/${place.id}`,{
        method: "PUT",
        body: JSON.stringify(updatedPlace),
        headers:{"Content-Type": "application/json",
      },
      }).then(() => history.push("/blog"));
    }} 
    variant="contained"
    color="success">Save</Button>
  </div>
  )
}