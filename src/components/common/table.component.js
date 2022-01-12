import TableBody from "../table-body.component";
import TableHeader from "../table-header.component";

const Table = ({data, columns, handleRemove }) => {
	return ( 
		<table className="table">
          <TableHeader columns={columns}></TableHeader>
          <TableBody data={data} columns = {columns} handleRemove = {handleRemove}></TableBody>
		</table>
	 );
}
 
export default Table;
