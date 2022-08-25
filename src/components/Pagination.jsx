function createArrayOfSize(n) {
  return new Array(n).fill(0);
}
function Pagination({ currentPage, onClick }) {
  const pages = createArrayOfSize(10).map((a, i) => (
    <button
      key={i}
      onClick={() => onClick(i + 1)}
      disabled={currentPage === i + 1}
    >
      {i + 1}
    </button>
  ));

  return <div>{pages}</div>;
}

export default Pagination;
