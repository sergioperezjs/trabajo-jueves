import Post from './Post'
import PostComposer from './PostComposer'

const baseImg = 'https://www.w3schools.com/w3images'
const postText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const posts = [
  {
    avatar: `${baseImg}/avatar2.png`,
    name: 'John Doe',
    time: '1 min',
    text: postText,
    images: [`${baseImg}/lights.jpg`, `${baseImg}/nature.jpg`],
  },
  {
    avatar: `${baseImg}/avatar5.png`,
    name: 'Jane Doe',
    time: '16 min',
    text: postText,
  },
  {
    avatar: `${baseImg}/avatar6.png`,
    name: 'Angie Jane',
    time: '32 min',
    text: `Have you seen this?
${postText}`,
    image: `${baseImg}/nature.jpg`,
  },
]

function MiddleColumn() {
  return (
    <div className="w3-col m7">
      <div className="w3-row-padding">
        <PostComposer />
      </div>
      {posts.map((post) => (
        <Post
          key={post.name}
          avatar={post.avatar}
          name={post.name}
          time={post.time}
          text={post.text}
          images={post.images}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default MiddleColumn