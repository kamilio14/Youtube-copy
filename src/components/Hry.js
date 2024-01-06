import { useParams, useSearchParams, Link } from "react-router-dom";
import data from "../data";

export default function Hry() {
  const [params, setParams] = useSearchParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("type");

  const filteredList = data.filter((item) =>
    filter ? item.type === "luxury" : item
  );

  const elements = filteredList.map((item, index) => {
    return (
      <Link to={`/${index}`}>
        <div className="video">
          <img src={item.imageUrl} />
          <div className="text">
            <h3 className="description">{item.description}</h3>
            <h4 className="name">{item.name}</h4>
            <p className="pozretia">85 tis. zhliadnutí • pred 2 rokmi</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <main className="main-content">
        <Link to="?type=live" className="exclusive">
          Exclusive
        </Link>
        <div className="all-videos">{elements}</div>
      </main>
    </>
  );
}
