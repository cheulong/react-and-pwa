
const initialState =   {
  articleList:[{
  "id":1,
  "title":"<h2>1Duo Reges: constuctio interrete.</h2>",
  "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
},
{
  "id":2,
  "title":"<h2>2Duo Reges: constuctio interrete.</h2>",
  "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
},
{
  "id":3,
  "title":"<h2>3Duo Reges: constuctio interrete.</h2>",
  "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
},
{
  "id":4,
  "title":"<h2>4Duo Reges: constuctio interrete.</h2>",
  "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
}],
article: {
  "id":4,
  "title":"<h2>4Duo Reges: constuctio interrete.</h2>",
  "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
}
};


const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ARTICLES':    
      return state.articleList;
      break;
    case 'SHOW_ARTICLE':
      return state.article;
      break;
    case 'REMOVE_ARTICLE':
      const articles = Object.assign([], state);      
      articles.articleList.splice(action.id, 1);
      return state=articles;
      break;
    default:
      return state
  }
}

export default articles