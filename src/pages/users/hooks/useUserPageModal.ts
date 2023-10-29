import { useQuery } from "react-query";
import { getSingleUser } from "../helpers/userPageRequests";
import { RouteParams } from "../helpers/userPage.types";

export default function useUserPageModal({ id, action }: Partial<RouteParams>) {
  const { data: response, isLoading } = useQuery({
    queryKey: ["user", action, id],
    queryFn: () => getSingleUser(id),
    enabled: action === "edit",
  });

  return { isLoading, data: response?.data };
}
