<template>
<div class="feedNavbar">
  <div class="navbar-border">
    <div class="navbar-content">
      <div class="navbar-item">
        <nav>
          <div>
            <ul>
              <li>
                <button>Друзья</button>
              </li>
              <li>
                <button type="button" @click="handleLinkLk">Личный кабинет</button>
              </li>
              <li>
                <button type="button" id="logout" @click="handleLogOut">Выйти</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <img id="navImg" src="https://pngimg.com/uploads/2022_year/small/2022_year_PNG28.png" alt="">
</div>
</template>

<script>
export default {
  name: "FeedNavbar",
  methods:{
    handleLogOut(){
      this.$store.commit("clear");
      //document.location.reload();
      this.$router.replace({
        name:"index"
      })
    },
    handleLinkLk(){
      this.$router.replace(
          {
            name:"lk"
          }
      )
    }

  },

}
</script>

<style>
.feedNavbar{
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  margin-top: 2%;
  padding: 3%;
}
.navbar-border{
  border: 3px dashed #950740;
}

.navbar-content{
  display: flex;
}

.feedNavbar button{
  background-color: transparent;
  border: none;
  color: antiquewhite;
  border-radius: 5px;
  margin: 10px;
}

#logout{
  background-color: #9400D3;
}

ul li{
  list-style: none;
}

#navImg{
  height: 120px;
  width: 240px;
}

</style>