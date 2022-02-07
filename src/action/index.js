export const addDataInRedux = (data) =>{
    return {
        type:'ADD_DATA',
        payload:data
    }
}
export const DeleteData = (index) => {
    return{
        type:'DELETE_DATA',
        payload:index
    }
}