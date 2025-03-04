export const Increment =() =>({
    type: "increment",
})

export const Decrement =() =>({
    type: "decrement",
})

export const openModal = () =>({
    type:"open_modal",
})

export const closeModal = () =>({
    type:"close_modal",
})

export const addCars = (car) => ({
    type : 'add_cars',
    payload :car,
})
export const removeCars = (id) => ({
    type : 'remove_cars',
    payload :id,
})