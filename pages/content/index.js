import Head from "next/head"
import ContentList from "../../components/ContentList"

const index = ({articles}) => {
    return (
        <div>
            <Head>
                <title>All Contets | My Next App</title>
            </Head>
            <h1>Content List</h1>
            <div>
                <ContentList articles={articles}></ContentList>
            </div>
        </div>
    )
}
export default index

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()
  
    return {
      props: {
        articles
      }
    }
  }