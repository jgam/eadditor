import React, { useState } from 'react';
import EditorPresenter from './EditorPresenter';
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { postContent } from '../../api/backendAPI';

//Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditorContainer() {
  //   const { username, auth } = useContext(AuthContext)
  const username = localStorage.getItem('username');
  const storageContents = localStorage.getItem('contents');
  const history = useHistory();

  const [value, setValue] = useState(storageContents);

  function logout() {
    localStorage.clear();
    history.push('/');
  }

  async function onChange(e) {
    console.log(e);
    setValue(e);
    //dont know the cost for api traffics
    localStorage.setItem('contents', e);

    //also to database
    try {
      const updateData = {
        username,
        contents: e,
      };
      await postContent({ updateData });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <EditorPresenter
        username={username}
        logout={logout}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default EditorContainer;
