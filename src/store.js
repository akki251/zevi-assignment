import create from 'zustand';
import { getProducts } from './api';

const useCommonStore = create((set) => ({
  searchTerm: '',
  products: [],
  filteredProducts: [],
  setSearchTerm: (searchTerm) => set((state) => (state.searchTerm = searchTerm)),
  fetchData: async function () {
    const data = await getProducts();
    set((state) => (state.products = data));
  },
  filter: {
    priceFilter: [],
    brandsFilter: [],
  },

  setFilter: (filterObj) => set((state) => (state.filter = { ...state.filter, ...filterObj })),

  performGlobalFilter: function () {
    set((state) => {
      state.filteredProducts = [];
      let filterApplied = false;

      let oldProducts = state.products;
      if (state.filter.brandsFilter.length) {
        oldProducts.forEach((item) => {
          if (state.filter.brandsFilter.includes(item.brand)) {
            if (state.filter.brandsFilter.includes(item.brand)) {
              state.filteredProducts = [...state.filteredProducts, item];
            }
          }
        });
        filterApplied = true;
      }

      if (state.filter.priceFilter.length) {
        oldProducts = state.filteredProducts.length === 0 ? state.products : state.filteredProducts;
        let productsFilterPrice_Brand = [];
        for (let i = 0; i < state.filter.priceFilter.length; i += 2) {
          oldProducts.forEach((item) => {
            if (
              item.price >= state.filter.priceFilter[i] &&
              item.price <= state.filter.priceFilter[i + 1]
            ) {
              productsFilterPrice_Brand.push(item);
            }
          });
        }
        state.filteredProducts = productsFilterPrice_Brand;
        filterApplied = true;
      }

      if (filterApplied === true && state.filteredProducts.length === 0) {
        state.filteredProducts = null;
      }

      // console.log(state.unique);

      // state.filteredProducts.filter((item) => state.filter.brandsFilter.includes(item.brand)),
    });
  },
}));

export default useCommonStore;

//   foodItems: [],
//   searchedItems: [],
//   isLoading: false,
//   setIsLoading: (loadingState) => set((state) => (state.isLoading = loadingState)),
//   searchByTerm: (searchTerm) =>
//     set((state) => {
//       const arr = state.foodItems.filter((item) => {
//         if (item.name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())) {
//           return true;
//         }
//       });

//       state.searchedItems = arr;
//     }),
//   updateFoodItems: (foodItems) => set((state) => (state.foodItems = foodItems)),
