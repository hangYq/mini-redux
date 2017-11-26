
//action 常量
const ADD = 'ADD';
const REMOVE = 'REMOVE';


//reducer
//新建reducer，根据老的state和action，生成新的state
export const  counter= (state = 0,action) => {
    switch(action.type){
        case ADD :
            return state + 1 ;
        case REMOVE :
            return state - 1;
        default:
            return state;
    }
}


//action creator
export const add = () => {
	return {
		type:ADD
	}
}
export const remove = () => {
	return {
		type:REMOVE
	}
}

//使用applyMiddleware 来处理异步action
export const addAsync = () => {
    //thunk 插件的使用，这里可以返回函数
    return dispatch => {
        setTimeout(() => {
            //异步结束后，手动执行dispatch
            dispatch(add());
        },2000)
    }
}