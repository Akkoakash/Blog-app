import { Blog } from "./Blog";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./global";

export function BlogList() {
  const history = useHistory();
  const [blogList, setBlogList] = useState([]);

  const getBlog = () => {
    fetch(`${API}/blog`,{
  method: "GET",
})
.then((data) => data.json())
.then((mvs) => setBlogList(mvs));
  };

useEffect(()=> getBlog(),[]);

const deleteBlog = (id) => {
  fetch(`${API}/blog/${id}`, 
  {method: "DELETE",
}).then(() => getBlog());
};

  return (
  <div className="blog-list">
    {blogList.map(({name, poster, summary, id }, index) => (
      <Blog
       key={index}
       name={name}
       poster={poster} 
        summary={summary}
        deleteButton={
          <IconButton 
          style={{ marginLeft: "auto"}}
          onClick={( )=> deleteBlog(id)} 
          aria-label="delete"
          color="error">
  <DeleteIcon />
</IconButton>
        }
        editButton={
          <IconButton 
          onClick={( )=> history.push(`/blog/edit/${id}`)}
          aria-label="delete"
          color="secondary">
  <EditIcon />
</IconButton>
        }
        id={id}
 />
    ))}
  </div>
  );
}
