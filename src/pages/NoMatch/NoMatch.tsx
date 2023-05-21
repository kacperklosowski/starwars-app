import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="grid place-content-center gap-3 h-screen ">
      <h1 className="text-3xl">There's nothing here!</h1>
      <Link to="/">
        Go to the <span className="text-indigo-800 font-bold">main page</span>
      </Link>
    </div>
  );
};

export default NoMatch;
