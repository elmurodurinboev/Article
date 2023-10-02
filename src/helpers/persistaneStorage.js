export const getItem = (key) => {
   try {
      return JSON.parse(localStorage.getItem(key))
   } catch (error) {
      console.log("Error getting data")
      return null
   }
}
export const setItem = (key, data) => {
   return localStorage.setItem(key, JSON.stringify(data))
}
