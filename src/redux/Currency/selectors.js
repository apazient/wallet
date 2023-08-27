export const selectCurrency = state => state.currency.data;
export const selectCurrencyLoading = state => state.currency.loading;
export const selectUsdBuy = state => state.currency.data[0].buy;
export const selectEuroBuy = state => state.currency.data[1].buy;
