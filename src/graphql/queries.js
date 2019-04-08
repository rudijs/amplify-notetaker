// eslint-disable
// this is an auto generated file. This will be overwritten

export const getNoteo = `query GetNoteo($id: ID!) {
  getNoteo(id: $id) {
    id
    note
  }
}
`;
export const listNoteos = `query ListNoteos(
  $filter: ModelNoteoFilterInput
  $limit: Int
  $nextToken: String
) {
  listNoteos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      note
    }
    nextToken
  }
}
`;
