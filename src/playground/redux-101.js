import {createStore} from 'redux';

//Action generators
// const add = ({a,b},c)=>{
// 	return a+b+c;
// }
// console.log(add({a:1,b:12},100))
const incrementCount = ({incrementBy = 1} = {})=>{
	return {
		type:'INCREMENT',
		incrementBy
	}
};
const decrementCount = ({decrementBy= 1} = {})=>({
	type: 'DECREMENT',
	decrementBy
});
const setCount = ({count})=>({
	type: 'SET',
	count
});
const resetCount = ()=>({
	type: 'RESET',
});

//Reducers
//1. Reducer are pure functions
//2. never change state or action
const countReducer = (state = {count: 0}, action)=>{
	switch (action.type){
		case 'INCREMENT':
			return {
				count: state.count +action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			}	
		case 'RESET':
			return {
				count: 0
			};				
		default:
			return state;
	}
	console.log("running");
};
const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
	console.log(store.getState())
});

//unsubscribe();
// store.dispatch({
// 	type: 'INCREMENT'
// });
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount({count:-101}))