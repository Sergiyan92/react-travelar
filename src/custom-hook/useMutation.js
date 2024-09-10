import { useState } from "react";

export const useMutation = ({ mutationFn, onSuccess, onError }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutation = async (...arg) => {
    setIsLoading(true);
    try {
      const result = await mutationFn(...arg);
      setData(result);
      setError(null);
      if (onSuccess) onSuccess(result);
    } catch (error) {
      setError(error);
      if (onError) onError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    data,
    isLoading,
    error,
    mutation,
  };
};
