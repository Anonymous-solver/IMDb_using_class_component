import React from "react";

const TableBody = ({ columns, items }) => {
	return (
		<tbody>
			{items.map((item) => {
				return (
					<tr>
						{columns.map((column) => {
							return (
								<React.Fragment key={column.label}>
									{column.content(item, column.path)}
								</React.Fragment>
							);
						})}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
