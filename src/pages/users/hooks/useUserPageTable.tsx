import { Link } from "react-router-dom";
import { UserResponse } from "../helpers/UserPage.types";
import {
  CellProps,
  ColumnTypes,
} from "../../../shared/components/Table/helpers/table.types";
import { useQuery } from "react-query";
import { getAllUsers } from "../helpers/userPageRequests";

export default function useUserPageTable() {
  const { data: response, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const columns: ColumnTypes<UserResponse> = [
    {
      id: "597096fc-a117-427b-855c-51c28c691df0",
      Header: "Name",
      accessor: "name",
      sortable: false,
      visibilityMenu: {
        label: "Name",
      },
    },
    {
      id: "33318573-51ab-4f5a-bf4e-cdb47779630f",
      Header: "Username",
      accessor: "username",
      sortable: false,
      visibilityMenu: {
        label: "Username",
      },
    },
    {
      id: "4ed0837f-4163-4674-947d-496b6a172571",
      Header: "Email",
      accessor: "email",
      sortable: false,
      visibilityMenu: {
        label: "Email",
      },
    },
    {
      id: "da3be3d7-e3e7-4a26-87ba-70ac37bc0c0f",
      Header: null,
      accessor: "id",
      sortable: false,
      Cell: (props: CellProps<UserResponse>) => {
        return <Link to={`/${props.cellValue}`}>More</Link>;
      },
    },
  ];

  return { isLoading, data: response?.data || [], columns };
}
