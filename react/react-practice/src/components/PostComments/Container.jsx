import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";

export default function Container() {
  const [post, setPost] = useState([]);
  const [postId, setPostId] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      //   get a single post
      // https://dummyjson.com/posts/1
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      setPost(response.data);
      console.log(response.data);
    }

    fetchPost();
  }, []);

  const getAllCommentsByPostId = async () => {
    // Get all comments by post id
    // https://dummyjson.com/comments/post/6
    const response = await axios.get(
      `https://dummyjson.com/comments/post/${postId}`,
    );
    setComments(response.data.comments);
  };

  const getPostAndComments = () => {
    setPostId(postId);
    console.log(postId);
    getAllCommentsByPostId();
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
          <label htmlFor="postId" className="text-sm font-medium text-gray-700">
            글 번호
          </label>
          <input
            type="number"
            id="postId"
            className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={postId}
            onChange={e => setPostId(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={getPostAndComments}>
            불러오기
          </button>
        </div>

        {/* postId를 통해 불러온 글 1개 보여주기 */}
        <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-sm">
          <Post key={post.id} post={post} />
        </div>
      </div>
    </>
  );
}
