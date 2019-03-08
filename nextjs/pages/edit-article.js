import { Component } from 'react';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/EditArticle1'), {
  ssr: false
})

class EditArticle extends Component {


  render() {
    return(
      <div className="editorContainer">
          <DynamicComponentWithNoSSR />
      </div>
    )
  }
}

export default EditArticle;