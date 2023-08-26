export const selectTransaction = state => state.transactions.transactions;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectToken = state => state.user.token;

console.log(selectIsLoading);
