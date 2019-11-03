/* eslint-disable */
export const getHomePosts = `
query GET_POSTS($first: Int) {
  soHot: posts(first: $first, where: {categoryNotIn: [1, 13], tag: "top-truyen", exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  new: posts(first: $first, where: {categoryNotIn: [1, 13], exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  tienHiep: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 11, exRandom: true, status: PUBLISH}) {
    nodes {
      postId
      title
      uri
      id
      featuredImage {
        sourceUrl
      }
    }
  }
  kinhDi: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 28, exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  quanTruong: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 6, exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
}
`
