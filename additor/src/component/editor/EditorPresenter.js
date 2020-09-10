import React from 'react';

//Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditorPresenter({ username, logout, value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'code'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
    ],
  };
  return (
    <>
      <div>
        this is editor, hello {username}
        <button onClick={logout}>
          <a href='http://localhost:3000/'>logout</a>
        </button>
      </div>
      <ReactQuill
        theme='snow'
        modules={modules}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default EditorPresenter;
