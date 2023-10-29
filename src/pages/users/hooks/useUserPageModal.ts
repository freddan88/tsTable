import { useQuery } from "react-query";
import { getSingleUser } from "../helpers/userPageRequests";

type HookModalTypes = {
  action?: string;
  id?: string;
};

export default function useUserPageModal({ id, action }: HookModalTypes) {
  const { data: response, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getSingleUser(id),
    enabled: action === "edit",
  });

  return { isLoading, data: response?.data || [] };
}
