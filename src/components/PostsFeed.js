import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostFeed() {
  const [getData, setgetData] = useState({ loading: true, posts: [] });

  async function fetchNext5Posts() {
    setgetData({ ...getData, loading: true });

    const response = await axios.get(
      `${API_URL}/posts?offset=${getData.posts.length}&limit=5`
    );
    console.log("SOme data fetch", response);
    const morePosts = response.data.rows;

    setgetData({ loading: false, posts: [...getData.posts, ...morePosts] });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div>
      <h2>REcent Posts</h2>
      {getData.posts.map((p, index) => {
        return (
          <div key={index}>
            <h3>{p.title}</h3>
            <p>
              {moment(p.createdAt).format("DD-MM-YYYY")}&bull;{" "}
              <span>
                {p.tags.map((t, index) => {
                  return (
                    <span key={index}>
                      <b>{t.tag}</b>
                    </span>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}

      <p>
        {getData.loading ? (
          <em>Loading....</em>
        ) : (
          <button onClick={fetchNext5Posts}>Load more</button>
        )}
      </p>
    </div>
  );
}
