import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Current id: {id}</h1>
    </div>
  );
}
