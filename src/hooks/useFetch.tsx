import React, {useCallback} from 'react';
import {toast} from "react-toastify";

export type SendReqType<T> = (reqEndpoint: string, method?: string, body?: {} | null) => Promise<T>;

export const useFetch = <T,>() => {
  const sendReq: SendReqType<T> = useCallback(async (reqEndpoint, method='GET', body=null) => {
    try {
      const response = await fetch(`/${reqEndpoint}`, {
          method: method,
          credentials: 'include',
          mode: 'cors',
          headers: method === 'GET' || method !== 'GET' ? {} : {
            'Access-Control-Allow-Origin':'true',
            'Content-Type': 'application/json',
          },
          body: body ? JSON.stringify(body) : null,
        }
      );
      return await response.json();
    } catch (e) {
      toast.error('Coś poszło nie tak, spróbuj później!');
    }
    // setIsLoading(false);
  }, []);

  return {
    sendReq,
  };
}