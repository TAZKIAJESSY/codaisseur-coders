import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostFeed() {
  const [getData, setgetData] = useState();

  async function fetchNext5Posts() {
    const response = await axios.get(`${API_URL}`);
    console.log("SOme data fetch", response);
    //const morePosts = response.data.rows;

    setgetData(response.data.rows);
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return <div></div>;
}
