// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./common/blockContent";
import category from "./article/category";
import post from "./article/post";
import author from "./article/author";
import customImage from "./common/customImage";
import breakSchema from "./common/break";
import product from "./product/product";
import collection from "./product/category";
import tag from "./product/tag";
import youtube from "./common/youtube";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Blog content schemas
    post,
    author,
    category,

    // Product types schemas
    product,
    collection,
    tag,

    // Common schema types
    blockContent,
    customImage,
    breakSchema,
    youtube,
  ]),
});
