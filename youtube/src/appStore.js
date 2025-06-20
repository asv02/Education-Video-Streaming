import {configureStore} from '@reduxjs/toolkit'
import {sideBarReducer,searchReducer} from './appSlice';

// redux Store
const appStore = configureStore(
        {
            reducer:
            {
                SideBarReducer : sideBarReducer,
                SearchReducer:  searchReducer// these are reducers
            }
        }
    )
export default appStore;