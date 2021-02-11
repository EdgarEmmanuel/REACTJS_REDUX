import { FETCH_POSTS,NEW_POSTS} from './actions/index';

const initialState = {
    items : [
        {
            id:1,
            title:'JAVA',
            body:" a work with JSP , SERVLET"
        }
    ],
    item : {}
};



export default function(state=initialState,action){
    switch(action.type){
        case FETCH_POSTS:
            // return {
            //     ...state,
            //     items:action.payload
            // }
            return {
                ...state,
                items:state.items
            }
            case NEW_POSTS:
                return {
                    ...state,
                    item:action.data
                }
        default:
            return state;
    }
};