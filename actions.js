import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbdownComment = id => dispatch(thumbdownComment(id));

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbdownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

dispatch({
    type: ADD_COMMENT,
    text: 'kolejny nowy komentarz!',
    id: uuid.v4()
})

dispatch({
    type: REMOVE_COMMENT,
    id: 9
})

dispatch({
    type: EDIT_COMMENT,    
    id: 10,
    text: 'wyedytowany tekst komentarza'
})

dispatch({
    type: THUMB_UP_COMMENT,
    id: 11
})

dispatch({
    type: THUMB_DOWN_COMMENT,
    id: 12
})

boundAddComment('nowy komentarz!');
boundRemoveComment(20);
boundEditComment(21, 'edytowany komentarz!');
boundThumbUpComment(22);
boundThumbdownComment(23);