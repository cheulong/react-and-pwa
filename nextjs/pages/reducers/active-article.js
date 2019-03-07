export default function (state={},action){
  switch(action.type){
    case 'ARTICLE_SELECTED':
    return action.payload;
    break;
  }
  return state;
}