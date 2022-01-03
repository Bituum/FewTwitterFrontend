import axios from "axios";


export const handlePost = (token, store, cmt, router) =>{
    axios.post("http://localhost:8081/user/" + store.state.userId + "/post",
        {
            commentSection: cmt
        },
        {headers:{
                Authorization: "Bearer_" + token
            }
        },
        )
        .then(() =>{
            router.replace({
                name:"feed"
            })
        })
        .catch((err) =>{
            console.log(cmt)
            console.log(err)
        })
}