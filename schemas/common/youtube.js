// youtube.js
export default {
  name: "youtube",
  type: "object",
  title: "Youtube Embed Link",
  fields: [
    {
      name: "alt",
      title: "Frame Title",
      type: "string",
    },
    {
      name: "embed_url",
      title: "Embed URL",
      type: "url",
    },
  ],
};
