import React,{ Component } from 'react';
import { Editor, EditorState, RichUtils, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { connect } from 'react-redux';
import htmlToDraft from 'html-to-draftjs';
import Link from 'next/link';
import { saveArticle } from '../store'

class EditArticle1 extends Component {
  title='';
  content='';
  constructor(props) {
    super(props)
    const { selectedArticle}= this.props;
    this.title = selectedArticle.title;
    this.content = selectedArticle.content;
    
    const contentBlock = htmlToDraft(this.title);
    const contentBlock1 = htmlToDraft(this.content);
    
    if(contentBlock||contentBlock1) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      const contentState1 = ContentState.createFromBlockArray(contentBlock1.contentBlocks);
      const editorState1 = EditorState.createWithContent(contentState1);
      this.state = {
        editorState,editorState1,counter: 0, loading: true
      }

    }
   
  }
  componentDidMount() {
    this.startTime();
    
  }
  startTime(){
    this.interval = setInterval(() => {
      console.log(this.state.counter)
      
        this.setState({counter: this.state.counter + 1});
        if(this.state.counter>3){
          this.setState({loading:false});
          this.clearInterterval();
      
          }
    }, 1000);
  }
  clearInterterval(){
    clearInterval(this.interval);
    this.setState({counter:0});
  }
  onSave = (title1,content1) => {

    this.props.saveArticle({'id':+this.props.selectedArticle.id,'title': title1, 'content':content1})
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };
  onEditorStateChange1 = (editorState1) => {
    this.setState({
      editorState1
    });
  };

  onChange = (editorState1) => {
    this.setState({
      editorState1
    }) 
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState1, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState1, 'UNDERLINE'));
  }

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState1, 'BOLD'))
  }

  onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState1, 'ITALIC'))
  }



  render() {
    const { selectedArticle}= this.props;
    const { editorState,editorState1 } = this.state;

    return(
      <div>
        {this.state.loading && <div>
        {this.state.counter}
        <h1 className="App">Loading...</h1>
        <style jsx>
                   {` 
                  .App {
                    text-align: center;
                   width: 80%;
        margin: auto;
                  color: gray;
                   font-family: Arial;
                 `}
                 </style>
        </div>}
        {
          !this.state.loading &&
          <div className="article-content App">
          <div className="page-title">
          <Link href='/'><h2>&lt; home</h2></Link>
                <h1 className="title">Articles</h1>
                <hr/>
              </div>
          
            <Editor 
              editorState={editorState}
              wrapperClassName="title__wrapper"
              editorClassName="demo-editor"
              onChange={this.onEditorStateChange}
              />
              <p className="article-date"><small><Link href='/'><button onClick={() =>this.onSave(draftToHtml(convertToRaw(editorState.getCurrentContent())),draftToHtml(convertToRaw(editorState1.getCurrentContent())))}><span className="save-btn"> Save </span></button></Link></small></p>
              <hr/>
              <div className="editorContainer">
            <button onClick={this.onUnderlineClick}>U</button>
            <button onClick={this.onBoldClick}><b>B</b></button>
            <button onClick={this.onItalicClick}><em>I</em></button>        
            <div className="editors">
              <Editor 
              editorState={editorState1}
              wrapperClassName="title__wrapper"
              editorClassName="demo-editor"
              onChange={this.onEditorStateChange1}
              />
              </div>
          </div>
  
          <style jsx>
          {`
          .demo-wrapper {
            width: 100% !important;
            display: block !important;
            margin-bottom: 25px !important;
            height: 400px !important;
          }
          
          .rdw-editor-toolbar {
            padding: 6px 5px 0;
            border-radius: 2px;
            border: 1px solid #F1F1F1;
            display: flex;
            justify-content: flex-start;
            background: white;
            flex-wrap: wrap;
            font-size: 15px;
            margin-bottom: 5px;
            user-select: none;
          }
  
          .rdw-inline-wrapper {
            display: flex;
            align-items: center;
            margin-bottom: 6px;
            flex-wrap: wrap;
          }
          
          .rdw-option-wrapper {
            border: 1px solid #F1F1F1;
            padding: 5px;
            min-width: 25px;
            height: 20px;
            border-radius: 2px;
            margin: 0 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background: white;
            text-transform: capitalize;
          }
          
          textarea {
            width: 100%;
          }
          
          .save-btn {
            color: green;
          }
          
          .title__wrapper {
            margin: 0;
          }
          .App {
            text-align: start;
            width: 80%;
            margin: auto;
            color: gray;
          }
          
          .title {
            text-transform: uppercase;
            font-size: 2.2rem;
            text-align: center;
          
          }
          
          .page-title h2 {
            float: left;
          }
          `}
          </style>
        </div>
        }
      </div>
     
    )
  }
}

const mapStateToProps = ({ selectedArticle }) => ({ selectedArticle })
const mapDispatchToProps = (dispatch) => ({
  saveArticle: article =>dispatch(saveArticle(article)),
})
export default connect(mapStateToProps,mapDispatchToProps)(EditArticle1);