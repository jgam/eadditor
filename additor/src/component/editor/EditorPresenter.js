import React from 'react';

//Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//styled
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Greetings = styled.div`
  font-size: 20px;
`;

const Logout = styled.button`
  background-color: #3b5999;
  color: #fffffe;
  font-weight: 800;
  border-color: unset;
  margin-top: 10px;
`;

const ALink = styled.a`
  color: #fffffe;
  &:hover {
    color: #00a0c6;

    text-decoration: none;
    cursor: pointer;
  }
`;
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
      <Header>
        <Greetings>this is editor, hello {username}</Greetings>
        <Logout onClick={logout}>
          <ALink href='http://localhost:3000/'>logout</ALink>
        </Logout>
      </Header>
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
