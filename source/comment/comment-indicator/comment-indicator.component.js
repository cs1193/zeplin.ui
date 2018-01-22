import CommentIndicatorComponentTemplate from './comment-indicator.component.html';

export default {
  NAME: 'commentIndicator',
  bindings: {
    commentCount: '<',
  },
  template: CommentIndicatorComponentTemplate,
};
