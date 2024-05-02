import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className=" justify-center flex flex-col text-center pt-60  font-mono"
    >
      <h1 className="text-4xl font-bold p-4">Oops!</h1>
      <p className="text-2xl p-4">Sorry, an unexpected error has occurred.</p>
      <p className=" text-xl text-gray-500 ">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
