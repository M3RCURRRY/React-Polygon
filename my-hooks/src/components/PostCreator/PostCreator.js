import { useState } from "react";

import styles from "./PostCreator.module.css";
import { useDispatch } from "react-redux"; 

function PostCreator() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    if (title !== "" && content !== "") {
      console.log("Post added")
      addPost(title, content);
    }
    else {
      console.log("Title or content can't be empty!");
    }    
  }

  function onChangeHandler(e) {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "content") setContent(e.target.value);
  }

  const addPost = (title, content) => {
    dispatch({type: "ADD_POST", payload: { title: title, content: content } })
  };

  return (
    <div className={styles.authFormContainer}>
      <form onSubmit={submitHandler}>
        <label>
          Title
          <br/>
          <input type={"text"} name="title" value={title} onChange={(e) => onChangeHandler(e)}/>
        </label>
        <label>
          Content
          <br/>
          <input type={"text"} name="content" value={content} onChange={(e) => onChangeHandler(e)}/>
        </label>
        <input type={"submit"} value="Create new post"/>
      </form>
    </div>
  );
}

export default PostCreator;