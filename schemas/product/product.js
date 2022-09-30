export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "product_collection" } }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "images",
      title: "Carousel Items",
      type: "array",
      of: [
        { type: "customImage", title: "Image" },
        { type: "youtube", title: "Youtube Link" },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "meta_description",
      title: "Meta Description",
      type: "text",
    },
  ],
};
