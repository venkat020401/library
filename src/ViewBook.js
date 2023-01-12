import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ViewBook() {

  const params = useParams();

  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://63a149e3e3113e5a5c514a70.mockapi.io/books/${params.id}`).then((response) => {
      setPost(response.data);
      setLoading(false)
    });
  }, []);

  return (
    <div className="container mt-5">
      {
        isLoading ? <h1>Loading...</h1> : <div className="row">
          <div className="col-sm-6">
            <h2>{post.username}</h2> <br />
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th>Book ID</th>
                  <td>{post.id}</td>
                </tr>
                <tr>
                  <th>Title</th>
                  <td>{post.title}</td>
                </tr>
                <tr>
                  <th>Author</th>
                  <td>{post.author}</td>
                </tr>
                <tr>
                  <th>Published On</th>
                  <td>{post.published}</td>
                </tr>
                <tr>
                  <th>Book Added On</th>
                  <td>{post.book_added_date}</td>
                </tr>
                <tr>
                  <th>Staff Name</th>
                  <td>{post.staff}</td>
                </tr>
                <tr>
                  <th>Image URL</th>
                  <td>{post.image}</td>
                </tr>
                <tr>
                  <th><Link to={`/staff-dashboard`} className="btn btn-dark btn-sm mt-2">Back</Link></th>
                  <td><Link to={`/edit-book/${post.id}`} className="btn btn-secondary btn-sm mt-2">Edit Details</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }

    </div>
  )
}

export default ViewBook