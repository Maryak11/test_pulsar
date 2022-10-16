import axios from 'axios'

const instances = {
  web: (c) => {
    console.log(process.env.BASE_URL)
    const instance = axios.create({
      baseURL: process.env.BASE_URL,
    })
    return instance
  },
}

export default instances
