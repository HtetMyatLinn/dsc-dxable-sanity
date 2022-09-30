export default {
  name: "product_collection",
  title: "Product Category",
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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "icon",
      title: "Collection Icon",
      type: "customImage",
    },
  ],
};
