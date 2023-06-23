import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const sendReports = createAsyncThunk('reports/sendReports',async (arg,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch('http://localhost:3001/reports',{
            method: 'POST',
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            },
            body: JSON.stringify(arg)
        })
    }catch(error){ return rejectWithValue(error.message)}

});

export const getReports = createAsyncThunk('reports/getReports',async (arg,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await fetch('http://localhost:3001/reports');
        const data = await res.json();
        return data;
    }catch(error){return rejectWithValue(error.message)}
})

export const deleteReport = createAsyncThunk('reports/deleteReports' , async (arg,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await fetch(`http://localhost:3001/reports/${arg}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            }
            

        })
        return arg;
    }catch(error){return rejectWithValue(error.message)}
})

export const getdetails = createAsyncThunk('reports/getdetails', async (arg,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await fetch(`http://localhost:3001/reports/${arg}`);
        const data = await res.json();
        return data
    }catch(error){return rejectWithValue(error.message)}
});

export const updateReports = createAsyncThunk('reports/updateReports',async(arg,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    
    try{
       const res = await fetch(`http://localhost:3001/reports/${arg.id}`,{
            method: 'PUT',
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            },
            
        })    
}catch(error){return rejectWithValue(error.message)}});




const initialState={
    reports: null,
    isLoading: false,
    reportDetails: null,
    reportUpdate:null,
    toggle: false,
    catchReport: null
};

const reports = createSlice({
    name:'reports',
    initialState,
    reducers:{
        sendReport: (state , action)=>{
            console.log(action.payload)
            return {...state, catchReport: action.payload , toggle: true}
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(sendReports.pending , (state,action)=>{
            console.log(action)
        })
        .addCase(sendReports.fulfilled , (state,action)=>{
            console.log(action)
        })
        .addCase(sendReports.rejected,(state,action)=>{
            console.log(action)
        })

        //getReports
        .addCase(getReports.pending,(state,action)=>{
            return {...state, isLoading: true};
        })
        .addCase(getReports.fulfilled,(state,action)=>{
            console.log(action)
            return {...state, isLoading: false ,reports: action.payload}
        })
        .addCase(getReports.rejected,(state,action)=>{
            return {...state}
        })

        //delete report
        .addCase(deleteReport.pending,(state,action)=>{
            return {...state, isLoading: true}
        })
        .addCase(deleteReport.fulfilled,(state,action)=>{
            return {...state, isLoading: false ,reports: state.reports.filter(report => report.id !== action.payload)}
        })
        .addCase(deleteReport.rejected, (state,action)=>{
            return {...state, isLoading: false}
        })

        //show details

        .addCase(getdetails.pending , (state,action)=>{
            return;
        })
        .addCase(getdetails.fulfilled,(state,action)=>{
            return {...state, reportDetails: action.payload}
        })
        .addCase(getdetails.rejected,(state,action)=>{
            console.log(action)
        })

        //update report 

        .addCase(updateReports.pending , (state,action)=>{
            return;
        })
        .addCase(updateReports.fulfilled,(state,action)=>{
            return {...state, reportUpdate:action.payload , toggle: false, catchReport: null}
        })
        .addCase(updateReports.rejected,(state,action)=>{
            return;
        })

    }
});

export default reports.reducer;
export const reportsActions = reports.actions;