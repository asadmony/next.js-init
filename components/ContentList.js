
import { ContentItem } from "./ContentItem";

export default function ContentList({articles}) {
    return (
        <div>
            {articles.map((article, index) => (
                <ContentItem key={article.id} article={article}></ContentItem>
            ))}
        </div>
    )
}
