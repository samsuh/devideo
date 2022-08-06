import axios from 'axios'

const KEY = 'AIzaSyBf-AIzaSyBybEld54g6qJnfHqfvyE25Pu2YW-gLtq0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
})
