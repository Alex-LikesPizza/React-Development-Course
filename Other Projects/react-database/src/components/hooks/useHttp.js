import React, {useState} from 'react'

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest(requestOption, manageData) {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(requestOption.endpoint,
        {
          method: requestOption.method ? requestOption: "GET",
          headers: requestOption.headers ? requestOption.headers:{},
          body: requestOption.body ? JSON.stringify(requestOption.body) : null
        });
      if (!response.ok) {
        throw new Error('Something went wrong.');
      }
      const data = await response.json();
      manageData(data);

    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }

  return {
    isLoading,
    error,
    sendRequest
  };
}

export default useHttp;