import axios from "axios";

export const authorization = (url, routeName, login, password, store, router) => {
    axios.post(url,
        {login: login, password: password},
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then((response) => {
        store.commit("setToken", response.data.token);
        store.commit("setEmail", response.data.email)
        store.commit("setUserId", response.data.userId);
        router.replace(
            {
                name: routeName
            }
        )
    })
        .catch((err) => {
            console.log(err)
            router.replace({
                name: "index"
            })
        })
}