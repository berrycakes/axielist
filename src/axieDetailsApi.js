import axios from 'axios'
import { useQuery } from 'react-query'

const axiosFetch = axios.create({
  //   baseURL: `${process.env.BASE_URL}`,
  baseURL: 'https://api.axie.technology/getaxies',
})
const getAxieDetails = async (axieId) => {
  if (axieId) {
    try {
      const axieDetails = await axiosFetch.get(`/${axieId}`)
      return [axieDetails.data.ownerProfile.name, axieDetails.data.owner]
    } catch (e) {
      console.log({ e })
      return 'axie Owner not found'
    }
  }
  return 'axie Owner not found'
}

export const useGetAxieDetails = (axieId) => {
  return useQuery(['axieId', axieId], async () => {
    const data = await getAxieDetails(axieId)
    return data
  })
}
