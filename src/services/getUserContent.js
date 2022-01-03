import axios from "axios";


export const getContent = (url, token, store) =>{
     axios.get(url,
         {headers:{
             Authorization: "Bearer_" + token
             }
         })
         .then((res) =>{
             store.commit("setName", res.data.extension.name);
             store.commit("setPhoto", res.data.imagePath.replace(/"/g, ""));
             store.commit("setSecondName", res.data.extension.secondName);
             store.commit("setPatron", res.data.extension.patronymic);
             store.commit("setHobby", res.data.extension.hobby);
             store.commit("setFriends", res.data.extension.friends);
         })
         .catch(() =>{
             store.commit("setName", "нет");
             store.commit("setPhoto", "https://hajiri.co/uploads/no_image.jpg");
             store.commit("setSecondName", "нет");
             store.commit("setPatron", "нет");
             store.commit("setHobby", "нет");
             store.commit("setFriends", "нет");
         })
}