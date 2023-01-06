import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductModel } from '../../../types/types'

import {
  addCompare,
  deleteAllCompare,
  deleteCompare,
  getCompare
} from './compareAPI'

type InitialState = {
  isLoading: boolean
  compare: ProductModel[] | []
  isExist: boolean
  isError: boolean
  error: string
}

const initialState: InitialState = {
  isLoading: false,
  compare: [],
  isExist: false,
  isError: false,
  error: ''
}

export const fetchCompare = createAsyncThunk(
  'compare/fetchCompare',
  async () => {
    const compare = await getCompare()
    return compare
  }
)

export const removeToCompare = createAsyncThunk(
  'compare/removeCompare',
  async (id: string) => {
    const compare = await deleteCompare(id)
    return compare
  }
)

export const removeAllCompare = createAsyncThunk(
  'shoppingCart/removeAllCarts',
  async () => {
    const carts = await deleteAllCompare()
    return carts
  }
)

export const addToCompare = createAsyncThunk(
  'compare/addCompare',
  async (id: string) => {
    const compare = await addCompare(id)
    return compare
  }
)

const compareSlice = createSlice({
  name: 'compare',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCompare.pending, state => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchCompare.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.compare = action.payload
      })
      .addCase(fetchCompare.rejected, (state, action) => {
        state.isLoading = false
        state.compare = []
        state.error = action.error?.message || 'something is Error'
      })
      .addCase(removeToCompare.pending, state => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(
        removeToCompare.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false
          state.isError = false
          state.compare = action.payload
        }
      )
      .addCase(removeToCompare.rejected, (state, action) => {
        state.isLoading = false
        state.compare = []
        state.error = action.error?.message || 'something is error'
      })
      .addCase(addToCompare.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isExist = false
      })
      .addCase(addToCompare.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        if (!action.payload) {
          state.compare = [...state.compare]
          state.isExist = true
        } else {
          state.isExist = false
          state.compare = [...state.compare, action.payload]
        }
      })
      .addCase(addToCompare.rejected, (state, action) => {
        state.isLoading = false
        state.isExist = false
        state.compare = []
        state.error = action.error?.message || 'something is Error'
      })
      .addCase(removeAllCompare.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isExist = false
      })
      .addCase(removeAllCompare.fulfilled, state => {
        state.isLoading = false
        state.isError = false
        state.compare = []
      })
      .addCase(removeAllCompare.rejected, (state, action) => {
        state.isLoading = false
        state.isExist = false
        state.error = action.error?.message || 'something is Error'
      })
  }
})

export default compareSlice.reducer
