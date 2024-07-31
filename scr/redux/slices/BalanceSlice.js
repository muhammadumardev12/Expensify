import { createSlice } from "@reduxjs/toolkit";


const balance = createSlice({
    name:'balance',
    initialState: {
        balance: 0,
        income: 0,
        expense:0,
        expenses:[] ,
      },
      reducers: {
        updateIncome: (state, action) => {
          state.income = Number(action.payload);
          state.balance = Number(action.payload); 

        },
        addIncome: (state, action) => {
          state.income += Number(action.payload); 
          state.balance += Number(action.payload); 

        },
        addExpenses:(state,action)=>{
        const { name, amount ,id} = action.payload;
        state.expenses.push({ name, amount: Number(amount),id:id});
        state.expense += Number(amount);
        state.balance -= Number(amount); 
      },
      removeExpense: (state, action) => {
        const id = action.payload;
        const expenseToRemove = state.expenses.find(exp => exp.id === id);
        if (expenseToRemove) {
          state.expense -= expenseToRemove.amount;
          state.balance += expenseToRemove.amount;
          state.expenses = state.expenses.filter(exp => exp.id !== id);
        }
      },
       updateExpense:(state,action)=>{
        const {id,name, amount} = action.payload
        const expenseToUpdate = state.expenses.find((exp)=>exp.id === id)
        if (expenseToUpdate) {
          const amountDifference = Number(amount) - expenseToUpdate.amount;
          expenseToUpdate.name = name;
          expenseToUpdate.amount = Number(amount);
          state.expense += amountDifference;
          state.balance -= amountDifference;
        }
       },
       userFireBaseData:(state,action)=>{
        state.balance =action.payload.balance;
        state.income =action.payload.income;
        state.expenses =action.payload.expenses;
        state.expense =action.payload.expense;
       },
       logOut:(state,action)=>{
        state.balance=0;
        state.income=0;
        state.expense=0;
        state.expenses=[]
       }
    }
})
export const {updateIncome,addIncome,addExpenses,removeExpense,updateExpense,userFireBaseData,logOut} =balance.actions;
export default balance.reducer;
