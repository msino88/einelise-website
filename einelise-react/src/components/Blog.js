export default function Blog( {title, date, content}) {
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <p className="blog-meta">By Michael Wang - {date}</p>
            <p>{content}</p>
            <hr />
        </div>
    );
}