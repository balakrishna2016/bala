import axios from 'axios'
const querystring = require('querystring');

/*********Chapters */

export const GetAllChapters = () => {
    return dispatch => {
        const END_POINT = "http://localhost:8080/allChapters"
        axios.get(END_POINT)
        .then((response)=>{
            //console.log(response.data)
            dispatch({
                type : 'FETCHED_CHAPTERS',
                payload : response.data
            })
        })
        .catch((err)=>{
            if(err){
                dispatch ({
                    type : 'FAILED_FETCH_CHAPTERS'
                })
            }
        })
    }
}



export const FlipDropDown = (state) => {
    //console.log("Flipped Dropdown" , state)
    return {
        type : 'FLIP_DROP_DOWN',
        payload : state
    }
}


export const SelectChapter = (id,state) => {
    // console.log(id)
    // console.log(state)
    return {
        type : 'SELECTED_CHAPTER',
        payload : {
            Chapter : id, //12
            Selected : state // false/true
        }
    }
}


export const SelectSubChapter = (id,state) => {
    //console.log(id)
    //console.log(state)

    return {
        type : 'SELECTED_SUB_CHAPTER',
        payload : {
            Chapter : id,
            Selected : state

        }
    }
}