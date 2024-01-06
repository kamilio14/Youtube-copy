import {
  Link,
  useLoaderData,
  useSearchParams,
  useNavigate,
  Form,
} from "react-router-dom";
import React from "react";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  return null;
}

export default function Login() {
  const message = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <Form className="form" method="post">
        <h1 className="please-login">{message}</h1>
        <div className="card">
          <div className="email">
            <label>Write your email </label>
            <input type="text" name="email" className="email" />
          </div>
          <div className="password">
            <label>Write your password </label>
            <input type="text" name="password" className="password" />
          </div>

          <button className="btn-submit">Submit</button>
        </div>
      </Form>
    </>
  );
}
