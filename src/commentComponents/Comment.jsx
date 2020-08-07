import React from 'react';

export default function Comment(props) {
  const { comment: { givenName, email, content, created } } = props;

  return (
    <div className="media mb-3">
      {/* <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
        alt={name}
      /> */}

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{created.toISOString()}</small>
        <h6 className="mt-0 mb-1 text-muted">{`${givenName}  ${email}`}</h6>
        {content}
      </div>
    </div>
  );
}
