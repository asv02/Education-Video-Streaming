import {configureStore} from '@reduxjs/toolkit'
import {sideBarReducer,searchReducer,SuggestionReducer} from './appSlice';

// redux Store
const appStore = configureStore(
        {
            reducer:
            {
                SideBarReducer : sideBarReducer,
                SearchReducer:  searchReducer,
                SuggestionReducer:SuggestionReducer
                // these are reducers
            }
        }
    )
export default appStore;