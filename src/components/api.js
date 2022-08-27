import { request, gql } from 'graphql-request';

const graphQLAPI = 'https://api-ap-south-1.hygraph.com/v2/cl7bpw7za3xcj01uld5rwh4m2/master';
export const getSuggestions = async () => {
  const query = gql`
    query getSuggestions {
      products(last: 4) {
        id
        image {
          url
        }
        name
      }
    }
  `;

  const results = await request(graphQLAPI, query);

  return results.products;
};
