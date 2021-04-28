import { request } from '../lib/datocms'
import { Image, renderMetaTags } from 'react-datocms'
import Head from 'next/head'

const ALLPRODUCTS_QUERY = `
query appProducts {
  allProducts(first: 2) {
    name
    price
    mainImage {
      id
    }
    alternativeImages {
      id
    }
    description {
      value
    }
  }
}`

export async function getStaticProps() {
  const data = await request({
    query: ALLPRODUCTS_QUERY,
    variables: { first: 2 },
  })

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
	console.log(data)
  return (
    <div>
			Start Page
    </div>
  )
}
