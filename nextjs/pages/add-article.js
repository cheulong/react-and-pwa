import { Component } from 'react';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR1 = dynamic(() => import('../components/AddArticle1'), {
  ssr: false
})

export class AddArticle extends Component {


  render() {
    return(
      <div>
          <DynamicComponentWithNoSSR1 />
      </div>
    )
  }
}
