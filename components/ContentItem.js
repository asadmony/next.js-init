

export const ContentItem = ({article, index}) => {
    return (
        <>
            <h2>
                {/* <Link href="/article/[id]" as={`/article/${article.id}`}> */}
                {article.id} -- {article.title}
                {/* </Link> */}
            </h2>
        </>
    )
}
