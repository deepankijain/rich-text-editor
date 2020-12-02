import React, { useState } from 'react';
import './Editor.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import { Editor } from 'ckeditor5-custom-build/build/ckeditor';
import MyUploadAdapter from './MyUploadAdapter ';
const TextEditor = () => {
  const [entry, setEntry] = useState('');
  return (
    <div className='editor'>
      <CKEditor
        editor={Editor}
        data={entry}
        onInit={(editor) => {
          editor.plugins.get('FileRepository').createUploadAdapter = (
            loader,
          ) => {
            return new MyUploadAdapter(loader);
          };
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEntry(data);
          console.log(editor, data, event);
        }}
        config={{
          placeholder: 'Write something awesome...',
        }}
      />
    </div>
  );
};

export default TextEditor;
