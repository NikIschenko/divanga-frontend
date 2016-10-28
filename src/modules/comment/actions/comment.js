export default class CommentActions {

  static setComments(comments) {
    return {
      type: 'SET_COMMENTS',
      comments,
    }
  }
  
}