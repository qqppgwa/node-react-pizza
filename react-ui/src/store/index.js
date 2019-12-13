import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
    getMenu,
    getSize,
    getCrust,
    getTopping
} from './../assets/api'
// import cookie from 'react-cookies'
let menu, crust, size

const init = {
    ordering: [],
    isInit: false
}


const reducers = (state = init, {
    type,
    payload
}) => {
    console.log(payload)
    switch (type) {
        case 'Ordering':
            console.log('2')
            return {
                ...state,
                ordering: payload.list
            }

            case 'MENU_INIT':
                console.log(payload)
                return {
                    ...state,
                    isInit: payload.isInit,
                        pizza: payload.pizza,
                        crust: payload.crust,
                        size: payload.size,
                        topping: payload.topping
                }
                default:
                    return state
    }
}
// export const menuInit = () => {
//     console.log('nj')
// }
export const menuInit = () => async dispatch => {
    try {

        let pizza = await getMenu()
        let crust = await getCrust()
        let size = await getSize()
        let topping = await getTopping()
        console.log(topping)
        dispatch({
            type: 'MENU_INIT',
            payload: {
                pizza: pizza.data.data,
                crust: crust.data.data,
                size: size.data.data,
                topping: topping.data.data,
                isInit: true
            }

        });
    } catch (e) {

    }

}
//store
const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
))
export default store