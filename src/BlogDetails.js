import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from './global';

export function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
   fetch(`${API}/blog/${id}`,{
    method: "GET",
})
.then((data) => data.json())
.then((mv) => setBlog(mv))
.catch((err) => console.log(err));
  }, []);
  
  //const history = useHistory();
  return (
    <div>
      <div className="blog-detail-container">
        <div className="blog-specs">
          <h3 className="blog-name">{blog.name}</h3>
        </div>
        <p className="blog-summary">{blog.summary}</p>
      </div>
    </div>
  );
}
