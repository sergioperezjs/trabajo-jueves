import { useRef, useState } from 'react'
import Post from './Post'
import PostComposer from './PostComposer'

const baseImg = 'https://www.w3schools.com/w3images'
const postText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const initialPosts = [
  {
    id: 1,
    avatar: `${baseImg}/avatar2.png`,
    name: 'John Doe',
    time: '1 min',
    text: postText,
    images: [`${baseImg}/lights.jpg`, `${baseImg}/nature.jpg`],
    liked: false,
    likes: 0,
    comments: [],
  },
  {
    id: 2,
    avatar: `${baseImg}/avatar5.png`,
    name: 'Jane Doe',
    time: '16 min',
    text: postText,
    liked: false,
    likes: 0,
    comments: [],
  },
  {
    id: 3,
    avatar: `${baseImg}/avatar6.png`,
    name: 'Angie Jane',
    time: '32 min',
    text: `Have you seen this?
${postText}`,
    image: `${baseImg}/nature.jpg`,
    liked: false,
    likes: 0,
    comments: [],
  },
]

function MiddleColumn() {
  const [posts, setPosts] = useState(initialPosts)
  const nextId = useRef(initialPosts.length + 1)

  function handleAddPost(text, images = []) {
    const newPost = {
      id: nextId.current++,
      avatar: `${baseImg}/avatar3.png`,
      name: 'My Profile',
      time: 'now',
      text,
      images,
      liked: false,
      likes: 0,
      comments: [],
    }
    setPosts((prev) => [newPost, ...prev])
  }

  function handleDeletePost(id) {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }
  

  function handleToggleLike(id) {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) } : post,
      ),
    )
  }

  function handleAddComment(id, comment) {
    const newComment = {
      name: 'My Profile',
      avatar: `${baseImg}/avatar3.png`,
      text: comment,
    }
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, comments: [...post.comments, newComment] } : post)),
    )
  }

  return (
    <div className="w3-col m7">
      <div className="w3-row-padding">
        <PostComposer onAddPost={handleAddPost} />
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onToggleLike={handleToggleLike}
          onAddComment={handleAddComment}
          onDeletePost={handleDeletePost}
        />
      ))}
    </div>
  )
}

export default MiddleColumn