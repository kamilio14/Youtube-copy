import { redirect } from "react-router-dom";

export default function checkOf({ params }) {
  const isLogged = true;
  if (!isLogged) {
    throw redirect("/login?message=You must login first to access a video!");
  } else {
    return null;
  }
}
