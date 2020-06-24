import produce from 'immer';
 
const INITIAL_STATE = {
   profile: null,
};
 
export default function auth(state = INITIAL_STATE, action) {
   switch(action.type) {
       case '@auth/SIGN_IN_SUCCESS': //Também irá ouvir a action de signInSuccess
           return produce(state, draft => {
               draft.profile = action.payload.user;
           })
       default:
           return state;
   }
}