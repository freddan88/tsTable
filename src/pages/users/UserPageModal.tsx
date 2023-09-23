import { useParams, Link } from "react-router-dom";
import useBasePath from "../../shared/hooks/useBasePath";

export default function UserPageModal() {
  const params = useParams<{ id: string }>();
  const basePath = useBasePath(params);

  return <Link to={basePath}>{params.id}</Link>;
}
