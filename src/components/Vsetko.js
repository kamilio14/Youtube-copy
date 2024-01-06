import { useSearchParams, Link, useLoaderData } from "react-router-dom";
import data from "../data";

export function loader() {
  return "Hellow world";
}

export default function Vsetko() {
  const [searchParams] = useSearchParams();

  const loaderData = useLoaderData();
  console.log("psy", loaderData);

  const filter = searchParams.get("type");

  const filteredList = data.filter((item) => {
    return filter ? item.price > 100 : item;
  });

  console.log("kundy", filteredList);

  const elements = filteredList.map((item, index) => {
    return (
      <Link to={`/${index}`}>
        <div className="video">
          <img src={item.imageUrl} alt="" />
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
