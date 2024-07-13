// SEO.js
import { Helmet } from "react-helmet";

type SEO = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  url: string;
  image: string;
};

const SEO = (props: SEO) => {
  const { author, description, image, keywords, title, url } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={image} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
