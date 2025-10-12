export default function Post({ post }) {
  console.log("Post component");
  console.log(post);

  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Post</h2>
      <div key={post.id} className="mb-4">
        <h3 className="text-md font-medium">{post.title}</h3>
        <p className="text-sm text-gray-600">{post.body}</p>
      </div>
    </>
  );
}
