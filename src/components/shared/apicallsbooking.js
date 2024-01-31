const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL

const getAllBookings = () => {
    return fetch(`${URL}/booking`)
    .then(res => res.json())
    .catch(err => console.error(err))
}
const getSingleBooking = () => {}
const createBooking = () => {}
const updateBooking = () => {}
const deleteBooking = () => {}

const getAllES = () => {
    return fetch(`${URL}/ES`)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const getBookingsForRoom = (id) => {
    return fetch(`${URL}/eventspace/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err));
};

const getSingleES = () => {
    
}
const createES = () => {}
const updateES = () => {}
const deleteES = () => {}

export{
    getAllBookings,
    getSingleBooking,
    createBooking,
    updateBooking,
    deleteBooking,
    getSingleES,
    getBookingsForRoom
}