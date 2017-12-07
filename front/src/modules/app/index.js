import {fromJS} from "immutable";

const initialState = fromJS({

});

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }
};

export function* watchAppActions() {

}

export const selectAppContainer = (state) => state.containers.app.workSpace;
export const selectAppData = (state) => selectAppContainer(state).get("");