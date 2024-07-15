// import { create } from 'zustand'
// import { mountStoreDevtool } from 'simple-zustand-devtools'

// const userAuthStore = create((set, get) => ({
//   allUserData: null,
//   loading: false,

//   user: () => ({
//     user_id: get().allUserData?.user_id || null,
//     username: get().allUserData?.username || null,
//   }),
//   setUser: (user) =>
//     set({
//       allUserData: user,
//     }),
//   setLoading: (loading) => ({
//     loading,
//   }),
//   isLoggedIn: () => get().allUserData !== null,
// }))

// if (import.meta.env.DEV) {
//   mountStoreDevtool('Store', userAuthStore)
// }

// export { userAuthStore }

import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

const userAuthStore = create((set, get) => ({
  allStoreData: null,
  loading: false,

  user: () => ({
    user_id: get().allStoreData?.user_id || null,
    username: get().allStoreData?.username || null,
  }),
  setUser: (user) =>
    set({
      allStoreData: user,
    }),
  isLoading: (loading) => ({ loading }),
  isLoggedIn: () => get().allStoreData !== null,
}))
if (import.meta.env.DEV) {
  mountStoreDevtool('Store', userAuthStore)
}
export { userAuthStore }
