import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Oops.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}
