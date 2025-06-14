import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const { VITE_API_ENDPOINT } = import.meta.env;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${VITE_API_ENDPOINT}/products`)
      .then((response) => setProducts(response.data))
      .catch((err) => setError(err.message));
  }, [products]);

  return { products, error };
};

export default useFetch;
