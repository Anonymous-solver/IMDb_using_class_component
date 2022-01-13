import React from "react";

const TableBody = ({columns, data: rows }) => {
  return (
      <tbody>
        {
			rows.map(row => {
            	return (
					<tr>
						{
							columns.map(column => {
								return <React.Fragment key ={column.label}>{column.content(row, column.path)}</React.Fragment>
							})
						}
					</tr>
          		);
        	})
		}
      </tbody>
  );
};

export default TableBody;
