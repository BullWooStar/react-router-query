import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();

  const [sort, setSort] = useState("stars");
  const [order, setOrder] = useState("desc");
  const [perNumber, setPerNumber] = useState("10");

  const sortChangeHandler = function (e) {
    setSort(e.target.value);
    console.log(sort); // how???
  };

  const orderChangeHandler = function (e) {
    setOrder(e.target.value);
  };

  const numberChangeHandler = function (e) {
    setPerNumber(e.target.value);
  };

  useEffect(() => {
    history.push(
      `/search/repositories?q=tetris&sort=${sort}&order=${order}&per_page=${perNumber}`
    );
  }, [sort, order, perNumber]); //노란줄 why?

  return (
    <div>
      <select
        onChange={(e) => {
          sortChangeHandler(e);
        }}
      >
        <option value="stars">stars 많이 받은 순</option>
        <option value="forks">forks 많이 받은 순</option>
      </select>
      <select
        onChange={(e) => {
          orderChangeHandler(e);
        }}
      >
        <option value="desc">내림차순</option>
        <option value="asc">오름차순</option>
      </select>
      <select
        onChange={(e) => {
          numberChangeHandler(e);
        }}
      >
        <option value="10">10개 표시</option>
        <option value="20">20개 표시</option>
        <option value="30">30개 표시</option>
      </select>
    </div>
  );
}

export default Search;
