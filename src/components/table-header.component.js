const TableHeader = (props) => {
	return (
	  <thead>
		<tr>
		  {
			  props.columns.map((column) => {
					return <th key={column.label} style={{color: 'gray'}}>{column.label}</th>;
			   })
		  }
		</tr>
	  </thead>
	);
  };
  
  export default TableHeader;
  
  