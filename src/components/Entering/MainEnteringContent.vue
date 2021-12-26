<template>
  <div class="content_item">
    <div class="content-box">
      <p>У <span class="definition">вселенной</span> есть <span class="package">начало</span>, но нет <span class="package">конца</span>.<span className="conclusion"> Безграничность...</span>
      </p>
      <p>
        У <span class="definition">звезд</span> тоже есть начало, но они гибнут из-за собственной <span class="package">силы</span>.
        <span class="conclusion"> Ограниченность...</span>
      </p>
      <p>
        <span class="definition">Мудрецы</span> <span class="package">глупее</span> всех на свете. <span class="conclusion">История</span> нам это доказала.
      </p>
      <p>
        <span class="definition">Рыба</span>, живущая в океане, <span class="package">не знает</span> о мире на суше. Будь она <span className="package">разумна</span>, она бы также <span className="conclusion">погибла</span>.
      </p>
      <p>Назовем это последним предупреждением <span id="god">бога</span> для тех кто еще сопротивляется.</p>
    </div>
    <div class="footer_item">
      <img src="https://www.pngarts.com/files/1/Space-PNG-Download-Image.png" alt="" width="400"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainEnteringContent"
}
</script>

<style scoped>
.content_item{
  grid-area: content;
  background-color: #1a1a1d;
}

.content-box{
  padding: 20px;
  color: #ffffff;
}

.definition{
  color: #950740;
}

.conclusion{
  color: #9400D3;
}

.package{
  color: #6f2232;
}

#god{
  color: rgb(217, 180, 30);
}
</style>