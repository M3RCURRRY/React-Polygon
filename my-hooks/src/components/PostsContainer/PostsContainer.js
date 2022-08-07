import { useSelector } from "react-redux";

function PostsContainer(props) {
  const posts = useSelector(state => state.posts.posts);

  return(
    <div>
      {
        posts.map((item, index) => {
          return(
            <div key={index}>
              <h2>{item.title}</h2>
              <br/>
              <p>{item.content}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostsContainer;