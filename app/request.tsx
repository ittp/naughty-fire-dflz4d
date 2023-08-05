import { NextApiRequest, NextApiResponse } from 'next';


import axios from 'axios'
//import useSWR from 'swr'

/*
type clientConfig = {
  method: any;
  headers: any;

}

*/

let RequestConfig = {
  
    url: 'https://api.github.com/meta' || process.env.API_URL,
    config: {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

}


  
const DataRequest = async (url, config) => await fetch('https://api.github.com/meta', ...config);
                          

  const data = await res.json();
  return response.status(200).json({ data });


export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {

  const res = await fetch('https://api.github.com/meta', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
                          

  const data = await res.json();
  return response.status(200).json({ data });
}
