export default function Table({ columns, rows, primary, actions }) {
    const formatCell = (column, value) => {
        if (column === 'Toppings') {
            let toppingsArray;
            if (typeof value === 'string') {
                try {
                    toppingsArray = JSON.parse(value);
                } catch {
                    toppingsArray = value.split(',').map(item => item.trim());
                }
            } else if (Array.isArray(value)) {
                toppingsArray = value;
            } else {
                toppingsArray = [];
            }

            return (
                <div className="flex flex-wrap gap-1">
                    {toppingsArray.map((topping, index) => (
                        <span 
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                            {topping}
                        </span>
                    ))}
                </div>
            );
        }
        return value;
    };

    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-4 font-medium">
                                {column}
                            </th>
                        ))}
                        {actions && (
                            <th scope="col" className="px-6 py-4">
                                <span className="sr-only">Actions</span>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`px-6 py-4 ${column === primary ? 'font-medium text-gray-900' : ''}`}
                                >
                                    {formatCell(column, row[column.toLowerCase()])}
                                </td>
                            ))}
                            {actions && (
                                <td className="px-6 py-4 text-right">
                                    <a 
                                        href={route(actions, { pizza: row.id })} 
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Edit
                                    </a>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
