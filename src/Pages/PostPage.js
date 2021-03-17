import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const dispatch = useDispatch();
  const postData = useSelector(selectPostAndComments);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Current id: {id}</h1>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <h2>Title:{postData.post.title}</h2>
            <div>
              {postData.post.developer.name}{" "}
              {moment(postData.post.createdAt).format("DD-MM-YYYY")}{" "}
              {postData.post.tags.map((t, index) => {
                return (
                  <div key={index}>
                    <em>{t.tag}</em>
                  </div>
                );
              })}
              <p>Content: {postData.post.content}</p>
              {/* <ReactMarkdown source={postData.post.content} /> */}
            </div>
          </div>

          <div>
            <h3>Comments</h3>
            {postData.comments.rows.length === 0 ? (
              <p>
                <em>No comments found!</em>
              </p>
            ) : (
              postData.comments.rows.map((c, index) => {
                return (
                  <div key={index.id}>
                    <p>{c.text}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
