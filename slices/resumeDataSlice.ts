import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
import { fields, otherProjectsType } from '../typings'
import { server } from '../config'

export interface ResumeDataState {
    data: fields, // can also be set to fields to be more specfic
    status: string,
    error: null
}


export const fetchResumeData = createAsyncThunk('resumeData/fetchResumeData', async () => { 
  try {
  let otherProjectsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "other-projects"})
  });

  let projectsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "projects"})
  });

  let singleFieldsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "single-fields"})
  });

  let skillsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "skills"})
  });

  return { otherProjects: await otherProjectsData.json(), projects: await projectsData.json(),
    singleFields: await singleFieldsData.json(), skills: await skillsData.json() };
  } catch(err: any) {
    return err.message;
  }

});

const initialState : ResumeDataState = {
     data:  {
        otherProjects: [],
        projects: [], 
        singleFields: [],
        skills: []
     }, 
     status: 'idle', // different states include: 'idle' | 'loading' | 'succeeded' | 'failed'
     error: null
}


export const resumeDataSlice = createSlice({
  name: 'resumeData',
  initialState,
  reducers: {
    // reducer: (state,action) => {
    //     state.resumeData.push(action.payload);
    // }
  },
  // This is for the async thunk functionality
  extraReducers(builder) {
    builder
      .addCase(fetchResumeData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchResumeData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
        // console.log(state.data);
        // console.log(action);
        // What else should I do here?

      })
      // .addCase(fetchResumeData.rejected, (state,action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // })
  } 
})

export const getAllResumeData = (state: { resumeData: { data: any; }; }) => state.resumeData.data;
export const getResumeDataStatus = (state: { resumeData: { status: any; }; }) => state.resumeData.status;
export const getResumeDataError = (state: { resumeData: { error: any; }; }) => state.resumeData.error;



export default resumeDataSlice.reducer;
// export const { retrieveData } = resumeDataSlice.actions


// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(retrieveData())
// {value: 1}
//store.dispatch(incremented())
// {value: 2}
//store.dispatch(decremented())
// {value: 1}