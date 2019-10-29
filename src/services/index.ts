import { useQuery } from 'plugins/axios'
import queries from '@/services/query'

console.log(`queries`, queries)
export default {
  getAllSettings: () => {
    return useQuery(queries.query.getAllSettings)
  },
  getHomePosts: (variables?: Object) => {
    return useQuery(queries.query.getCategories, variables)
  },
  getCategories: (variables?: Object) => {
    return useQuery(queries.query.getCategories, variables)
  },
  getAuthors: (variables?: Object) => {
    return useQuery(queries.query.getAuthor, variables)
  },
  getPost: (variables?: Object) => {
    return useQuery(queries.query.getPost, variables)
  }
}
