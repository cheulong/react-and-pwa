import React, { Component } from 'react';
// import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Link from 'next/link';

class EditArticle extends Component {
  // article ='';
  // articleList='';
  // constructor(props) {
  //   super(props);
  //   this.articleList = JSON.parse(localStorage.getItem('articles'));
  //   this.article = this.articleList.find(this.findArticle);
  //   const title = this.article.title;
  //   const html = this.article.content;
  //   const contentBlock1 = htmlToDraft(title);
  //   const contentBlock = htmlToDraft(html);
  //   if (contentBlock1||contentBlock) {
  //     const contentState1 = ContentState.createFromBlockArray(contentBlock1.contentBlocks);
  //     const editorState1 = EditorState.createWithContent(contentState1);
  //     const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  //     const editorState = EditorState.createWithContent(contentState);
  //     this.state = {
  //       editorState1,editorState
  //     };
  //   }
  // }

  // findArticle = (articleList) => { 
  //   return articleList.id === this.props.match.params.id;
  // }

  // updateArticle = (articleList) => { 
  //   if(articleList.id === this.props.match.params.id) {
  //     articleList.title = this.article.title;
  //     articleList.content = this.article.content;
  //   }
  //   return articleList.id === this.props.match.params.id;
  // }

  // onEditorStateChange1 = (editorState1) => {
  //   this.setState({
  //     editorState1,
  //   });
  // };

  // onEditorStateChange = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  // saveArticle = (title,content) => {
  //   this.article.title = title;
  //   this.article.content = content;
  //   const objIndex = this.articleList.findIndex((obj => obj.id === this.props.match.params.id));
  //   this.articleList[objIndex].title=this.article.title;
  //   this.articleList[objIndex].content=this.article.content;
  //   localStorage.clear();
  //   localStorage.setItem('articles', JSON.stringify(this.articleList));
  // }

  render() {
    // const { editorState1, editorState } = this.state;
    return (
      <div className="article-content">
      <div className="page-title">
      <Link href='/'><h2>&lt; home</h2></Link>
            <h1 className="title">Articles</h1>
            <hr/>
          </div>
      {/* <Editor
          toolbarHidden
          editorState={editorState1}
          wrapperClassName="title__wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange1}
        />
      <p className="article-date"><small><Link to='/'><button onClick={() =>this.saveArticle(draftToHtml(convertToRaw(editorState1.getCurrentContent())),draftToHtml(convertToRaw(editorState.getCurrentContent())))}><span className="save-btn"> Save </span></button></Link></small></p>
      <hr/>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        /> */}
      </div>
    );
  }
}

export default EditArticle;
