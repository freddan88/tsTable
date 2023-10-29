import Table from "../../shared/components/Table/Table";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useUserPageTable from "./hooks/useUserPageTable";
import Shelf2 from "../../shared/components/shelf/Shelf2";
import Shelf from "../../shared/components/shelf/Shelf";
import Shelf3 from "../../shared/components/shelf/Shelf3";
import { RouteParams } from "./helpers/userPage.types";

export default function UserPage() {
  const { isLoading, data, columns } = useUserPageTable();

  const navigate = useNavigate();

  const { id, action } = useParams<RouteParams>();

  const shelfId = action ? undefined : id;

  const handleClose = () => {
    navigate("/", {
      preventScrollReset: true,
      replace: true,
    });
  };

  return (
    <>
      <Table table={{ columns, data, loading: isLoading }} />
      <Shelf3 onClose={handleClose} id={shelfId}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsa
          nostrum fuga eum cum est? Illum, ex. Corporis odit dolore perferendis
          doloremque nisi, exercitationem sequi dicta quaerat nostrum
          voluptatibus rem. Ut, ullam nesciunt. Ab temporibus itaque nam, hic
          porro non ex corporis adipisci aspernatur quia aut voluptatum fugit
          dolor distinctio praesentium maiores ad vero consequuntur quo nemo!
          Reiciendis, iure asperiores! Corporis officia veritatis, voluptatibus
          aliquam, quasi vel minus, vero reiciendis sint accusantium iusto!
          Assumenda porro repellendus perferendis rem quod corporis hic deserunt
          cum, consectetur omnis, odit incidunt accusamus voluptas rerum.
          Obcaecati eveniet est commodi architecto, consequatur tenetur.
          Aspernatur dignissimos nemo laborum laboriosam, ullam debitis, porro
          sunt esse deserunt incidunt cupiditate, adipisci amet facere
          blanditiis repellat quod at vitae reiciendis perspiciatis?
        </p>
      </Shelf3>
      <Outlet />
    </>
  );
}
