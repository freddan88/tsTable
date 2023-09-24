import { useQuery } from "react-query";
import { getSingleUser } from "../helpers/userPageRequests";

type HookModalTypes = {
  id?: string;
};

export default function useUserPageModal({ id }: HookModalTypes) {
  const { data: response, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getSingleUser(id),
    enabled: Boolean(id?.toString()),
  });

  return { isLoading, data: response?.data || [] };
}
