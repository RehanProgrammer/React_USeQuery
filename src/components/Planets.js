import React, { useState } from "react";
import { useQuery, usePaginatedQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (key, greeting) => {
  console.log("key:  ", key);
  const res = await fetch("http://swapi.dev/api/planets");
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", page],
    fetchPlanets
  );
  return (
    <div>
      <h2>Planets</h2>
      {status === "error" && <div>Error Fethching</div>}
      {status === "loading" && <div>loading data...</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((old) =>
                !latestData || !latestData.next ? old : old + 1
              )
            }
            disabled={!latestData || !latestData.next}
          >
            Next page
          </button>
          <div>
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
