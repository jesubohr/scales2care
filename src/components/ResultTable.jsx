function Row({ row }) {
  return (
    <tr>
      <td className="border px-4 py-2">{row.name}</td>
      <td className="border px-4 py-2">{row.sphere}</td>
      <td className="border px-4 py-2">{row.total}</td>
      <td className="border px-4 py-2">{row.interpretation}</td>
    </tr>
  );
}

function ResultTable({ rows }) {
  return (
    <table className="w-full bg-white dark:bg-dark-blue dark:text-white">
      <thead>
        <tr>
          <th className="px-4 py-2 text-center ">Nombre</th>
          <th className="px-4 py-2 text-center">Categoria</th>
          <th className="px-4 py-2 text-center">Resultado</th>
          <th className="px-4 py-2 text-center">Interpretación</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return <Row row={row} key={"table-row-" + index} />;
        })}
      </tbody>
    </table>
  );
}

export default ResultTable;
