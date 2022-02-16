const initialData = []
const reducers = (state=initialData, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return [...state, action.payload]

        case 'DELETE_DATA':
            let newData = state.filter((item,index)=>{
                return index !== action.payload
            })
            return newData;

        default: return state
    }
}

export default reducers;