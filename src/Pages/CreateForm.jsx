import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
 return (
    <div className='createPostPage'>
      <form className="cpContainer">
        <h1 className="text-[white] text-[5vh]">Create New Post</h1>
        <div className="inputGp">
          <label htmlFor="" className="text-[white]">Title:</label>
          <input
            required
            type="text"
            placeholder='Title...'
            className="text-[white]"
          />
        </div>
        <div className="inputGp">
          <label htmlFor="" className="text-[white]">Post:</label>
          <textarea
            name=""
            required
            placeholder='Post...'
            id=""
            cols="30"
            rows="10"
          />
        </div>
        <button type="submit"  className="text-[white]">
          submit Post
        </button>
      </form>
    </div>
  );
};

export default CreateForm;