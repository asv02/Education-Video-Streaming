import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice(
    {
        name:"SideBar",
        initialState:{
            isSideBarOpen:false
        },
        reducers:
        {
           toggleSideBar:(state)=>
            {
               state.isSideBarOpen = !(state.isSideBarOpen);
               console.log("current state",(state.isSideBarOpen))
            },
               
           closeSideBar:(state)=>
            {
               state.isSideBarOpen = false
               console.log("current state",(state.isSideBarOpen))
            }

        }
    })

const searchSlice = createSlice(
    {
        name:"searchSlice",
        initialState:
        {
            search:""
        },
        reducers:
        {
            setSearch:(state,action)=>
                {
                    state.search = action.payload
                }
        }
    })

const SuggestionSlice = createSlice(
    {
        name:"SuggestionSlice",
        initialState:
        {
        },
        reducers:
        {
            additem:(state,action)=>
                {
                    state = Object.assign(state,action.payload)
                }
        }
    })

export const { toggleSideBar, closeSideBar } = SideBarSlice.actions;
export const { setSearch } = searchSlice.actions;
export const {additem} = SuggestionSlice.actions;

export const sideBarReducer = SideBarSlice.reducer;
export const searchReducer = searchSlice.reducer;
export const SuggestionReducer = SuggestionSlice.reducer;