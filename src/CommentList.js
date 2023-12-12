import axios from "axios";
import { useEffect, useState } from "react";

export function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`,
    );

    setComments(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
      })}
    </ul>
  );
}
