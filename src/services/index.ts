import { useQuery } from 'plugins/axios'
import queries from '@/services/query'

export default {
  getAllSettings: () => {
    return useQuery(queries.query.getAllSettings)
  },
  getHomePosts: (variables?: object) => {
    return useQuery(queries.query.getCategories, variables)
  },
  getCategories: (variables?: object) => {
    return useQuery(queries.query.getCategories, variables)
  },
  getAuthors: (variables?: object) => {
    return useQuery(queries.query.getAuthor, variables)
  },
  getPost: (variables?: object) => {
    return useQuery(queries.query.getPost, variables)
  }
}
