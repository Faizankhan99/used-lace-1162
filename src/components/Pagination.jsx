import { Button } from "@chakra-ui/react";
function createArrayOfSize(n) {
  return new Array(n).fill(0);
}
function Pagination({ totalpage, currentPage, onClick }) {
  const pages = createArrayOfSize(totalpage).map((a, i) => (
    // console.log(a)
    <Button
      key={i}
      onClick={() => onClick(i + 1)}
      disabled={currentPage === i + 1}
    >
      {i + 1}
    </Button>
  ));

  return <div>{pages}</div>;
}

export default Pagination;
