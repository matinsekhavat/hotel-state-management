import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch(url, query = "") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        console.log(`${url}${query}`);
        const res = await fetch(`${url}${query}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setData([]);
        console.log(error);
        toast.error(error?.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, url]);

  return {
    data,
    isLoading,
  };
}
