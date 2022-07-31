import { Blog } from "./Blog";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./global";
import { TextField } from "@mui/material";
import "./App.css";

export function BlogList() {
  const history = useHistory();
  const [blogList, setBlogList] = useState([]);

  const search = (searchText) => {

    if(searchText==""){ getBlog(); }
    else{
      const FilterList = blogList.filter(row => {
        const rowValue = row["name"]
        return rowValue !== undefined
          ? String(rowValue)
              .toLowerCase()
              .startsWith(String(searchText).toLowerCase())
          : true
      });
  
      setBlogList(FilterList);
    }
  }

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
    <div className="header">
      <div className="headerSearch">
        <TextField onChange={(event) => search(event.target.value)} label="Search" variant="outlined" />
      </div>
      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
   
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
  </div>
  );
}
