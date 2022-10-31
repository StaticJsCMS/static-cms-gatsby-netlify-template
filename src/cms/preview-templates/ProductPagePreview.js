import React from "react";
import PropTypes from "prop-types";
import { ProductPageTemplate } from "../../templates/product-page";

const ProductPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.data.intro.blurbs;
  const blurbs = entryBlurbs ? entryBlurbs : [];

  const entryTestimonials = entry.data.testimonials;
  const testimonials = entryTestimonials ? entryTestimonials : [];

  const entryPricingPlans = entry.data.pricing.plans;
  const pricingPlans = entryPricingPlans ? entryPricingPlans : [];

  return (
    <ProductPageTemplate
      image={getAsset(entry.data.image)}
      title={entry.data.title}
      heading={entry.data.heading}
      description={entry.data.description}
      intro={{ blurbs }}
      main={{
        heading: entry.data.main.heading,
        description: entry.data.main.description,
        image1: {
          image: getAsset(entry.data.main.image1.image),
          alt: entry.data.main.image1.alt,
        },
        image2: {
          image: getAsset(entry.data.main.image2.image),
          alt: entry.data.main.image2.alt,
        },
        image3: {
          image: getAsset(entry.data.main.image3.image),
          alt: entry.data.main.image3.alt,
        },
      }}
      fullImage={getAsset(entry.data.full_image)}
      testimonials={testimonials}
      pricing={{
        heading: entry.data.pricing.heading,
        description: entry.data.pricing.description,
        plans: pricingPlans,
      }}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProductPagePreview;
