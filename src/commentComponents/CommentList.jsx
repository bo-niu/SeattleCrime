/* eslint-disable react/no-array-index-key */
import React from 'react';
import Comment from './Comment.jsx';

export default function CommentList(props) {
  const { comments, loading } = props;
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{comments.length}</span>
        {' '}
        Comment
        {comments.length > 0 ? 's' : ''}
      </h5>
      {comments.length === 0 && !loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}

      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}
