<template>
<div class="feedNavbar">
  <div class="navbar-border">
    <div class="navbar-content">
      <div class="navbar-item">
        <nav>
          <div>
            <ul>
              <li>
                <a href="#">Друзья</a>
              </li>
              <li>
                <a href="#">Личная страница</a>
              </li>
              <li>
                <button type="button" @click="handleLogOut">LogOut</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FeedNavbar",
  methods:{
    handleLogOut(){
      sessionStorage.clear();
      document.location.reload();
    }
  }
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

</style>