/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import query from './query';

const ALLPRODUCTS_QUERY = `
query allProducts {
  allProducts {
    name
    price
    mainImage {
      url
    }
    id
    description {
      value
    }
  }
}`;

const LATESTPRODUCTS_QUERY = `
query latestProducts {
  allProducts(first: "4") {
    name
    price
    mainImage {
      url
    }
    id
    description {
      value
    }
  }
}`;

const GET_PROD_BY_ID_QUERY = `
query product($eq: ItemId) {
  product(filter: {id: {eq: $eq}}) {
    mainImage {
      url
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
    }
    name
    price
    description {
      value
    }
  }
}`;

const GET_PAGE_BY_NAME_QUERY = `
query allpages($eq: String) {
  allPages(filter: {title: {eq: $eq}}) {
    id
    slug
    title
    seo {
      description
      title
    }
    content {
      value
    }
    mainImage {
      url
    }
  }
}`;

const STARTPAGE_QUERY = `
query startPage {
  startpage {
    id
    title
    mainImage {
      url
    }
    content {
      value
    }
    seo {
      description
      title
    }
  }
}`;

const allProducts = async () => {
  const result = await query({ query: ALLPRODUCTS_QUERY });
  return result.allProducts;
};

const latestProducts = async () => {
  const result = await query({ query: LATESTPRODUCTS_QUERY });
  return result.allProducts;
};

const getProductById = async (id) => {
  const result = await query({
    query: GET_PROD_BY_ID_QUERY,
    variables: { eq: id.toString() },
  });
  return result.product;
};

const getPageByName = async (name) => {
  const result = await query({
    query: GET_PAGE_BY_NAME_QUERY,
    variables: { eq: name },
  });
  return result.allPages[0];
};

const startPage = async () => {
  const result = await query({ query: STARTPAGE_QUERY });
  return result.startpage;
};

export {
  allProducts,
  startPage,
  latestProducts,
  getProductById,
  getPageByName,
};
