import { EDIT_POST, 
        CAPTION_POST_CHANGED,
        EDIT_POST_FAIL,
        EDIT_POST_SUCCESS,
        SAVE_POST } 
         from '../actions/types';

const INITIAL_STATE = {
    captionEdit: '',
    loading: false,
    error: '',
    selectedEditPostId: null,
} 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_POST :
            return { 
                ...INITIAL_STATE, 
                captionEdit: action.payload.caption,
                selectedEditPostId : action.payload.idPost
            }
        case CAPTION_POST_CHANGED :
            return { ...state, captionEdit: action.payload }
        case SAVE_POST :
            return { ...state, loading: true, error: '' }
        case EDIT_POST_FAIL :
            return { ...state, loading: false, error: action.payload }
        case EDIT_POST_SUCCESS :
            return INITIAL_STATE;
        default :
            return state;
    }
};