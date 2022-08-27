import create from 'zustand';
import { getProducts } from './api';

const useCommonStore = create((set) => ({
  searchTerm: '',
  products: [],
  setSearchTerm: (searchTerm) => set((state) => (state.searchTerm = searchTerm)),
  fetchData: async function () {
    const data = await getProducts();
    set((state) => (state.products = data));
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
