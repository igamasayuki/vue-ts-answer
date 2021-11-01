<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ex01">Ex01</router-link> |
    </div>

    <h2>Samples</h2>
    <router-link to="/parentSample">ParentSample</router-link> |
    <router-link to="/s10">S10HelloVuejs</router-link> |
    <router-link to="/s20">S20v-bind</router-link> |
    <router-link to="/s30">S30ConputedProperty</router-link> |
    <router-link to="/s40">S40ConputedAndMethod</router-link> |
    <router-link to="/s50">S50LifeCycleHook</router-link> |
    <router-link to="/s60">S60v-on</router-link> |
    <router-link to="/s70">S70textBox</router-link> |
    <router-link to="/s80">S80radioButton</router-link> |
    <router-link to="/s90">S90singleCheckBox</router-link> |
    <router-link to="/s100">S100multiCheckBox</router-link> |
    <router-link to="/s110">S110simgleSelectBox</router-link> |
    <router-link to="/s120">S120multiSelectBox</router-link> |
    <router-link to="/s130">S130number</router-link> |
    <router-link to="/s140">S140trim</router-link> |
    <router-link to="/s150">S150lazy</router-link> |
    <router-link to="/s160">S160v-if</router-link> |
    <router-link to="/s170">S170v-else</router-link> |
    <router-link to="/s180">S180v-else-if</router-link> |
    <router-link to="/s190">S190notUseKey</router-link> |
    <router-link to="/s200">S200useKey</router-link> |
    <router-link to="/s210">S210v-show</router-link> |
    <router-link to="/s220">S220v-for</router-link> |
    <router-link to="/s230">S230v-for2</router-link> |
    <router-link to="/s240">S240v-for-index</router-link> |
    <router-link to="/s250">S250v-for-get</router-link> |
    <router-link to="/s260">S260v-for-filter</router-link> |
    <router-link to="/s270">S270v-bind</router-link> |
    <router-link to="/s280">S280BasicParent</router-link> |
    <router-link to="/s290">S290PropsParent</router-link> |
    <router-link to="/s300">S300CountUpParent</router-link> |
    <router-link to="/s310">S310EmitParent</router-link> |
    <router-link to="/s320">S320EmitParent2</router-link> |
    <router-link to="/s330">S330ParentSlot</router-link> |
    <router-link to="/s340">S340ParentSlot2</router-link> |
    <router-link to="/s350">S350ParentMultiSlot</router-link> |
    <router-link to="/s360">S360ParentScopeSlot</router-link> |
    <router-link to="/compVuex1">compVuex1</router-link> |
    <router-link to="/compVuex2">compVuex2</router-link> |
    <router-link to="/compVuex3">compVuex3</router-link> |
    <router-link to="/compVuex4">compVuex4</router-link> |
    <router-link to="/compVuex5">compVuex5</router-link> |
    <h2>Exam answers</h2>
    <router-link to="/ex10">Ex10</router-link> |
    <router-link to="/ex20">Ex20</router-link> |
    <router-link to="/ex30">Ex30</router-link> |
    <router-link to="/ex31">Ex31</router-link> |
    <router-link to="/ex40">Ex40</router-link> |
    <router-link to="/ex50">Ex50</router-link> |
    <router-link to="/ex60">Ex60</router-link> |
    <router-link to="/ex70">Ex70</router-link> |
    <router-link to="/ex80">Ex80</router-link> |
    <router-link to="/ex90">Ex90</router-link> |
    <router-link to="/ex100">Ex100</router-link> |
    <router-link to="/ex110">Ex110</router-link> |
    <router-link to="/ex120">Ex120</router-link> |
    <router-link to="/ex130">Ex130</router-link> |
    <router-link to="/ex140">Ex140</router-link> |
    <router-link to="/ex150">Ex150</router-link> |
    <router-link to="/ex151">Ex151</router-link> |
    <router-link to="/ex160">Ex160</router-link> |
    <router-link to="/ex170">Ex170</router-link> |
    <router-link to="/ex190">Ex190</router-link> |
    <router-link to="/ex200">Ex200</router-link> |
    <router-link to="/ex210">Ex210</router-link> |
    <router-link to="/ex215">Ex215</router-link> |
    <router-link to="/ex220">Ex220</router-link> |
    <router-link to="/ex225">Ex225</router-link> |
    <router-link to="/ex230">Ex230</router-link> |
    <router-link to="/ex240">Ex240</router-link> |
    <router-link to="/ex250">Ex250</router-link> |

    <h2>Execution result</h2>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
