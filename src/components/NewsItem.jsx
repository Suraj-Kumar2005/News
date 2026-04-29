import image from "../assets/unavailable.png";

const truncateText = (text, maxLength, fallback) => {
  if (!text) {
    return fallback;
  }

  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const formatDate = (date) => {
  if (!date) {
    return "Recently";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Recently";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const NewsItem = ({title,description,urlToImage,url,source,publishedAt}) => {
  return (
    <article className="card h-100 glass-card premium-news-card">
      <div className="news-image-wrap">
        <img src={urlToImage || image} className="card-img-top news-card-img" alt={title || "news"} />
        <div className="news-image-overlay">
          <span className="news-source">{source || "News"}</span>
          <span className="news-date">{formatDate(publishedAt)}</span>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{truncateText(title, 60, "Untitled news story")}</h5>
        <p className="card-text news-card-text">
         {truncateText(description, 120, 'Click "Read more" to access the full article')}
        </p>
        <a href={url} className="btn glass-button" target="_blank" rel="noreferrer">Read More</a>
      </div>
    </article>
  );
};

export default NewsItem; 
