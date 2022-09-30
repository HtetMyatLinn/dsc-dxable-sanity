// Overriding our sanity studio view
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list().title("DXable Contents").items(S.documentTypeListItems());
