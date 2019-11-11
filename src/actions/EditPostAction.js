import firebase from '@firebase/app';
import '@firebase/database';

import { EDIT_POST,
        CAPTION_POST_CHANGED,
        EDIT_POST_FAIL,
        EDIT_POST_SUCCESS,
        SAVE_POST
    } from './types';



    export const initEditPost = ( obj ) => {
        return {
            type: EDIT_POST,
            payload: {
                idPost :  obj.idPost,
                caption : obj.caption
            }
        }
    }
    
    export const inputEditCaptionChange = (caption) => {
        return {
            type: CAPTION_POST_CHANGED,
            payload: caption
        }
    }
    
    export const saveEditPost = ({id,caption,imageURL,userId}) => {
        return (dispatch)=>{
            dispatch({
                type: SAVE_POST
    
            })
            firebase.database().ref(`/posts/${id}`).set({
                caption:caption,
                imageURL:imageURL,
                userId:userId
            }).then(() =>{
               dispatch({
                   type:EDIT_POST_SUCCESS
               }) 
            })
            .catch((err)=>{
                dispatch({
                    type:EDIT_POST_FAIL,
                    payload:err.message
                })
            })
        }
    }