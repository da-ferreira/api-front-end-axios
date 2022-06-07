
const url = 'http://localhost:5501/api';

function getUsers() {
    axios
        .get(url)
        .then(response => {
            renderApiResult.textContent = JSON.stringify(response.data)
        })
        .catch(err => console.error(err));
}

function getUser(id) {
    axios
        .get(`${url}/${id}`)
        .then(response => {
            userName.textContent = response.data.name
            userCity.textContent = response.data.city
            userAvatar.src = response.data.avatar
        })
        .catch(err => console.error(err));
}

function addNewUser(newUser) {
    axios
        .post(url, newUser)
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function updateUser(id, userUpdated) {
    axios
        .put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function deleteUser(id) {
    axios
        .delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

// -----------------------------------------------------------

getUsers();

const newUser = {
    name: 'Jorge Silva',
    avatar: 'http://picsum.photos/200/200',
    city: 'Recife'
};

// getUser(4);
// addNewUser(newUser);

const userUpdated = {
    name: 'João Silva',
    avatar: 'http://picsum.photos/400/400',
    city: 'João Pessoa'
};

// updateUser(10, userUpdated);
// deleteUser(5);
