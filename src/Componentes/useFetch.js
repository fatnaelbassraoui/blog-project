import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    (e) => {
      (async () => {
        try {
          setLoading(true);

          const response = await fetch(url);
          const res = await response.json();
          setData(res);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    },
    [url]
  );
  return { data, loading, error };
};

export default useFetch;
