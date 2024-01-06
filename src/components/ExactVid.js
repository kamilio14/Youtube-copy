import { useParams } from "react-router-dom";
import data from "../data";

export default function ExactVid() {
  const params = useParams();

  if (!data[params.id]) {
    return <p>Video not found</p>; // You can customize this message
  }

  return (
    <>
      <main className="exact-vid-main">
        <img src={data[params.id].imageUrl} />
        <h1>{data[params.id].name}</h1>
      </main>
    </>
  );
}
