/* eslint-disable no-shadow */
import { GraphQLClient } from 'graphql-request';

const query = async ({ query, variables, preview }) => {
  const endpoint = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
};

export default query;
