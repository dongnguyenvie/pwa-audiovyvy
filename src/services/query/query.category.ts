/* eslint-disable */
export const getCategories = `
query getCategory {
  categories(where: {exclude: [1]}) {
   	nodes {
      id
      name
      slug
    }
  }
}
`
