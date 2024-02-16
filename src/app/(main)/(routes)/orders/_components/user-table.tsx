import { DataTable } from "@/components/table/data-table";
import { OrderT } from "../_types";
import AddUser from "./add-user";
import { columns } from "./columns";

interface OrderTableProps {
  orders: OrderT[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <div>
      <DataTable
        heading="Orders"
        filterKey={"name"}
        data={orders}
        columns={columns}
      >
        <AddUser />
      </DataTable>
    </div>
  );
};

export default OrderTable;
