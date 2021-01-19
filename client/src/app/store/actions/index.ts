import searchActions, { types as searchTypes } from './search.actions';
import detailActions, { types as detailTypes } from './detail.actions';
import breadcrumbActions, { types as breadcrumbTypes } from './breadcrumb.actions';

export const types = {
  searchTypes,
  detailTypes,
  breadcrumbTypes,
};

export default {
  searchActions,
  detailActions,
  breadcrumbActions,
};
