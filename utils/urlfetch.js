import useSWR from "swr";
import axios from "axios";

const headers = new Headers();
headers.append("Authorization","Basic cGxleGFnb246YjRhNDZkMjQtMjk3MS00YWU3LWJjMTMtZGZmZGI5NDQ5OWRk");
const config = {headers: {"X-TBA-Auth-Key": "taNNHN48xLHMTafxhcWk32hWxvYxufm5ghT0dTXx8AORWU5gOQhDLhDBRsSJXcgz"}};
const fetcherHeader = ([url,header]) => fetch(url, {headers: header}).then(res => res.json());

const fetcher = (url) => fetch(url,).then((res) => res.json());

export function getDataFromURLHeaders(url, header) {
  console.log(url)
    const { data, error, isLoading } = useSWR(
      [url,header],
      fetcherHeader
      );
      if (error) return error.message;
      return data
}

export function getDataFromURL(url) {
    const { data, error, isLoading } = useSWR(
        url,
        fetcher
      );
      if (error) return error;
      return data
}