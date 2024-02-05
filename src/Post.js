import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`post/${post.id}`}>
        <h2 className="">{post.title}</h2>
        <h2 className="postDate"> {post.datetime}</h2>
      </Link>
      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}`}
      </p>
    </article>
  );
};

export default Post;
