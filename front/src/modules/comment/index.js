import {fromJS} from "immutable";
import {takeEvery} from "redux-saga/effects";
import {updateElement} from "../../api";

const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST";
const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
const CREATE_COMMENT_FAILED = "CREATE_COMMENT_FAILED";

const initialState = fromJS({
   comment: {},
   loading: false,
   error: null
});

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_COMMENT_REQUEST:
            return state
                .set("comment", action.payload)
                .set("loading", true);

        case CREATE_COMMENT_SUCCESS:
            return state
                .set("loading", false);

        case CREATE_COMMENT_FAILED:
            return state
                .set("loading", false)
                .set("error", action.payload);

        default:
            return state;

    }
};

export const createCommentRequest = (data) => ({
    type: CREATE_COMMENT_REQUEST,
    payload: data
});

export const createCommentSuccess = () => ({
    type: CREATE_COMMENT_SUCCESS,
});

export const createCommentFailed = (error) => ({
    type: CREATE_COMMENT_FAILED,
    payload: error
});

function* createComment(action) {
    yield updateElement("films", action.payload.id, action.payload.data, createCommentSuccess, createCommentFailed);
}

export function* watchCommentActions() {
    yield takeEvery(CREATE_COMMENT_REQUEST, createComment);
}

export const selectCommentContainer = (state) => state.containers.comment;
export const selectCommentData = (state) => selectCommentContainer(state).get("comment");