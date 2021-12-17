import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.jorgeifms.repl.co'
})

export default api