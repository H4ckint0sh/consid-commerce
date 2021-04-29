/* eslint-disable import/prefer-default-export */
import query from './query';

const ALLPRODUCTS_QUERY = `
query allProducts {
  allProducts {
    name
    price
    description {
      value
    }
    alternativeImages {
      title
      url
    }
  }
}`;

const STARTPAGE_QUERY = `
query startPage {
  startpage {
    mainImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
      title
      url
    }
    content {
      value
    }
  }
}
`;

const allProducts = async () => {
  const result = await query({ query: ALLPRODUCTS_QUERY });
  return result.allProducts;
};

const startPage = async () => {
  const result = await query({ query: STARTPAGE_QUERY });
  return result.startpage;
};

export { allProducts, startPage };
