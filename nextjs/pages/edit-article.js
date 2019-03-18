import { Component } from 'react';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/EditArticle1'), {
  ssr: false
})

export class EditArticle extends Component {


  render() {
    return(
      <div className="editorContainer">
          <DynamicComponentWithNoSSR />
      </div>
    )
  }
}
