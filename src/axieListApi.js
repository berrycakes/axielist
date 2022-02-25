import axios from 'axios'
import { useQuery } from 'react-query'

const axiosFetch = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  // baseURL:
  //   'https://axieviewer-default-rtdb.asia-southeast1.firebasedatabase.app/axiemasterList',
})

export const getAxieList = async () => {
  try {
    const response = await axiosFetch.get('/axiemasterList.json')
    return response.data
  } catch (e) {
    console.log({ e })
  }
}

export const useGetAxieList = () => {
  return useQuery('axie-list', getAxieList)
}
