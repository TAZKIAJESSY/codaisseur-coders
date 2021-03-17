import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import moment from "moment";

import { fetchNext5Posts } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

export default function PostFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div>
      <h2>REcent Posts</h2>
      {posts.map((p, index) => {
        return (
          <div key={index}>
            <h3>
              {" "}
              <Link to={`/post/${p.id}`}>{p.title}</Link>
            </h3>
            <p>
              {moment(p.createdAt).format("DD-MM-YYYY")}&bull;{" "}
              {/* you need to sort the date from recent to old */}
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
        {loading ? (
          <em>Loading....</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
