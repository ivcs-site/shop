const getData = () => {
    return fetch('https://test-593f7-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
}

export default getData