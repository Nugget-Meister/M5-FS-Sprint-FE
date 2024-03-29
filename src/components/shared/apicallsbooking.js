const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL || "http://localhost:8080"

const getAllBookings = () => {
    // console.log(URL)
    return fetch(`${URL}/booking`)
    .then(res => {
        // console.log(res)
       return res.json()
    })
    .catch(err => {
        console.error(err)
    })
}
const getSingleBooking = (id) => {
    return fetch(`${URL}/booking/${id}`)
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
const createBooking = () => {}
const updateBooking = () => {}
const deleteBooking = (id) => {
    const options = {
        method: "DELETE"
    }
    return fetch(`${URL}/booking/${id}`, options)
    .then(res => res.json())
}

const getAllES = () => {
    return fetch(`${URL}/eventspace`)
    .then(res => res.json())
    .catch(err => {console.error(err)})
}

const getSingleES = (id) => {
    // console.log(`${URL}/eventspace/${id}`)
    return fetch(`${URL}/eventspace/${id}`)
    .then(res => res.json())
    .catch(err => console.error(err))
}
const createES = (data) => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': "application/json"}
    }

    return fetch(`${URL}/eventspace`)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const updateES = () => {}
const deleteES = () => {}

export{
    getAllBookings,
    getSingleBooking,
    createBooking,
    updateBooking,
    deleteBooking,
    getAllES,
    getSingleES,
    createES,
    updateES,
    deleteES
}