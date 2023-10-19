const EnthuTable = ({ tableHead, tableHeadData, tableBody, tableBodyData }) => {
  return (
    <table class="table w-full">
      {tableHead && (
        <thead>
          <tr>{tableHeadData && tableHeadData}</tr>
        </thead>
      )}

      {tableBody && <tbody>{tableBodyData && tableBodyData}</tbody>}
    </table>
  );
};

export default EnthuTable;
