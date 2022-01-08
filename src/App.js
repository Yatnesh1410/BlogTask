import React, { useEffect, useState } from "react";
import axios from "axios";
import Body from "./components/Body";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = data.length;
  const PageNumbers = Math.ceil(totalPosts / postsPerPage);

  return (
    <>
      <div className="app">
        <h2>LETS HAVE A LOOK AT SOME RANDOM POSTS !</h2>

        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Body data={currentPosts} searchTerm={searchTerm} />
        <Stack spacing={2}>
          <Pagination
            count={PageNumbers}
            page={currentPage}
            size="large"
            onChange={(e, val) => setCurrentPage(val)}
            showFirstButton
            showLastButton
          />
        </Stack>
      </div>
    </>
  );
}

export default App;
