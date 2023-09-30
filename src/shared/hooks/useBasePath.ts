import { Params, useLocation } from "react-router-dom";

export default function useBasePath(params: Readonly<Params<string>>) {
  const location = useLocation();

  const basePath = Object.values(params).reduce((path, param) => {
    if (path && param) {
      const newPath = path.replace(`/${param}`, "");
      return newPath.length === 0 ? "/" : newPath;
    }
  }, location.pathname);

  return basePath ? basePath : "/";
}
