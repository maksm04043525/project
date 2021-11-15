import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Post = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(10);

  const chanePage = (page) => {
    setPage(page.selected + 1)
  }

  const limit = 10;
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetchPost()
  }, [page]);



  const fetchPost = async () => {
    const count = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setTotalPage(count.data.lenght / limit);
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _page: page,
        _limit: limit
      }
    });
    setPosts(posts.data)
  }

  const deletePost = (id) => {
    const confirm = window.confirm("это точно нужно удалить?")
    if (confirm) setPosts(posts.filter((post) => post.id !== id))
  }



  const onChange = (e) => {
    setFilter(posts.filter((posts) =>
      posts.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    )
  }



  const getSearch = () => {

    if (filter) return filter
    return posts
  }
  const searchPost = getSearch()


  return (
    <>
      <div className="container">
        <div className="row">
          <h2>Posts</h2>
          <form className="col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <textarea
                id="icon_prefix2"
                className="materialize-textarea"
                placeholder="Search"
                onChange={onChange}>
              </textarea>
            </div>
          </form>
          <div className="col s12">
            {searchPost.map((post) =>
              <div className="postBox">
                <p key={post.id}></p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => deletePost(post.id)}>удалить</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={chanePage}
        pageRangeDisplayed={3}
        pageCount={totalPage}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName={"active"}
      />
    </>
  );
}


export default Post;