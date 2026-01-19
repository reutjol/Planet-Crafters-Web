import { useCallback, useEffect } from "react";
import { useApi } from "./useApi";

export function useFetch(url) {
  const { data, loading, error, request } = useApi();

  const refetch = useCallback(() => {
    if (!url) return;
    return request({ method: "GET", url });
  }, [request, url]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
