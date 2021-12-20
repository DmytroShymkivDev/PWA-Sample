import React, { FC } from "react";
import { IPost } from "../interfaces/Post";

const Post: FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className="post">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__body">{post.body}</p>
    </div>
  );
};

export default Post;
