import React from 'react';

export default function Comment(props) {
  const {
    comment: {
      givenName, email, content, created,
    },
  } = props;

  return (
    <div className="media mb-3">
      {/* <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
        alt={name}
      /> */}

      <div className="comment-box">
        <small className="comment-date">
          {created.toLocaleString('en-US')}
        </small>
        <h6>{`${givenName}  ${email}`}</h6>
        {content}
      </div>
    </div>
  );
}
