import _ from 'plugins/lodash'

const queries: any = {}

const requireQueries = require.context(
  '.', false, /query.[\w-]+\.ts$/ // load những file bắt đầu = query. và kết thúc là .ts
)

requireQueries.keys().forEach(fileNm => {
  const fileConfig = requireQueries(fileNm)

  // lấy pascal name của component
  const componentName = _.upperFirst(
    _.camelCase(fileNm.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  _.forEach(fileConfig, (value, queryNm) => {
    queries[queryNm] = fileConfig[queryNm]
  })
})

export default {
  query: { ...queries }
}
