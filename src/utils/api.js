import axios from 'axios'

const BACKEND_HOST = 'https://bzv6xe1746.execute-api.us-east-1.amazonaws.com/dev/'

export const getSignedUrlApi = (data) => {
    return axios.get(BACKEND_HOST).then(({data}) => data).catch(console.error)
}
export const uploadToS3Api = (url, file) => {
    return axios.put(url, file).then(({data}) => data).catch(console.error)
}