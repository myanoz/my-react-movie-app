import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={"/search"}>영화 검색하기!</Link>
    </>
  );
}
