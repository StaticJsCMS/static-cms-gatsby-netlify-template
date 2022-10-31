import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.data.tags;
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={entry.data.description}
      tags={tags}
      title={entry.data.title}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
