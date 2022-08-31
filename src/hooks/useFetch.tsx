import React, {useCallback} from 'react';
import {toast} from "react-toastify";

export type SendReqType = (reqEndpoint: string, method?: string, body?: {} | null) => Promise<unknown>;

export const useFetch = () => {
  const sendReq: SendReqType = useCallback(async (reqEndpoint, method='GET', body=null) => {
    try {
      const response = await fetch(`/${reqEndpoint}`, {
          method: method,
          credentials: 'include',
          mode: 'cors',
          headers: {
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
  }, []);

  return {
    sendReq,
  };
}