import data from "../data.js";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Video() {
  const loader = useLoaderData();
  console.log("load", loader);
  const elements = data.map((item, index) => {
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
  return elements;
}
