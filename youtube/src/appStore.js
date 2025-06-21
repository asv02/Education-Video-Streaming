import {configureStore} from '@reduxjs/toolkit'
import {sideBarReducer,searchReducer,SuggestionReducer, ChatReducer} from './appSlice';

// redux Store
const appStore = configureStore(
        {
            reducer:
            {
                SideBarReducer : sideBarReducer,
                SearchReducer:  searchReducer,
                SuggestionReducer:SuggestionReducer,
                ChatReducer:ChatReducer
                // these are reducers
            }
        }
    )
export default appStore;