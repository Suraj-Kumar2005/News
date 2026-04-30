import { useEffect, useMemo, useState } from "react";
import NewsItem from "./NewsItem";

 

const NewsBoard = ({category, searchQuery}) => {
    const[articles, setArticles] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        
        
       const url=`https://newsapi.org/v2/everything?q==${category}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}&pageSize=25`;
        fetch(url, { signal: controller.signal })
          .then(response => response.json())
          .then(data =>setArticles(data.articles || []))
          .catch((error) => {
            if (error.name !== "AbortError") {
              setArticles([]);
            }
          });

        return () => controller.abort();
      }, [category]);

    const filteredArticles = useMemo(() => {
      const query = searchQuery.trim().toLowerCase();

      if (!query) {
        return articles;
      }

      return articles.filter((article) => {
        const searchableText = [
          article.title,
          article.description,
          article.source?.name,
        ].join(" ").toLowerCase();

        return searchableText.includes(query);
      });
    }, [articles, searchQuery]);

  return (
    <main className="container py-4 py-lg-5 news-board">
      <div className="news-heading">
        <p className="section-kicker">{category} headlines</p>
        <h2 className="section-title">
          {searchQuery ? `Search results for "${searchQuery}"` : "Latest News"}
        </h2>
      </div>

      <div className="row g-4 news-grid">
        {filteredArticles.map((news, index) => {
          return (
            <div
              className="col-12 col-md-6 col-lg-4 d-flex news-grid-item"
              key={news.url || index}
              style={{ "--animation-delay": `${Math.min(index, 8) * 70}ms` }}
            >
              <NewsItem
                title={news.title}
                description={news.description}
                urlToImage={news.urlToImage}
                url={news.url}
                source={news.source?.name}
                publishedAt={news.publishedAt}
              />
            </div>
          );
        })}
      </div>

      {filteredArticles.length === 0 && (
        <div className="empty-state">
          No stories match your search. Try another keyword or category.
        </div>
      )}
    </main>
  );
};

export default NewsBoard;
