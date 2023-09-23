import { useParams, useLocation, Link } from "react-router-dom";

export default function UserPageModal() {
  const params = useParams<{ id: string }>();
  const location = useLocation();

  const basePath = Object.values(params).reduce((path, param) => {
    const newPath = path.replace("/" + param, "");
    return newPath.length === 0 ? "/" : newPath;
  }, location.pathname);

  return <Link to={basePath}>{params.id}</Link>;
}
