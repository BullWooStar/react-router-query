import { useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function SearchResult(props) {
  const [infoResult, setInfoResult] = useState(null);
  const [onLoading, setOnLoading] = useState(false);

  const location = useLocation();
  const history = useHistory();

  const searchResult = async () => {
    setOnLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories${location.search}`
      );
      const result = await response.json();
      setInfoResult(result.items);
    } catch {
      throw new Error("ERROR!");
    } finally {
      setOnLoading(false);
    }
  };

  useEffect(() => {
    searchResult();
    history.push(`/search/repositories${location.search}`);
  }, [location.search]);

  return (
    <div>
      {onLoading ? <p>Loading</p> : null}
      {infoResult && (
        <ol>
          {infoResult.map((info) => (
            <li>{info.id}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default SearchResult;
