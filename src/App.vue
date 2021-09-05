<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <h2>Samples</h2>
    <router-link to="/parentSample">ParentSample</router-link> |
    <router-link to="/p18">P18</router-link> |
    <router-link to="/p24">P24</router-link> |
    <router-link to="/p26">P26</router-link> |
    <router-link to="/p29">P29</router-link> |
    <router-link to="/p31">P31</router-link> |
    <router-link to="/p35">P35</router-link> |
    <router-link to="/p53">P53</router-link> |
    <router-link to="/p67">P67textBox</router-link> |
    <router-link to="/p69">P69radioButton</router-link> |
    <router-link to="/p70">P70singleCheckBox</router-link> |
    <router-link to="/p71">P71multiCheckBox</router-link> |
    <router-link to="/p73">P73simgleSelectBox</router-link> |
    <router-link to="/p74">P74multiSelectBox</router-link> |
    <router-link to="/p79">P79number</router-link> |
    <router-link to="/p80">P80trim</router-link> |
    <router-link to="/p81">P81lazy</router-link> |
    <router-link to="/p84">P84v-if</router-link> |
    <router-link to="/p85">P85v-else</router-link> |
    <router-link to="/p86">P86v-else-if</router-link> |
    <router-link to="/p87">P87notUseKey</router-link> |
    <router-link to="/p90">P90useKey</router-link> |
    <router-link to="/p91">P91v-show</router-link> |
    <router-link to="/p93">P93v-for</router-link> |
    <router-link to="/p93_2">P93v-for2</router-link> |
    <router-link to="/p95">P95v-for-index</router-link> |
    <router-link to="/p96">P96v-for-get</router-link> |
    <router-link to="/p98">P98v-for-filter</router-link> |
    <router-link to="/p108">P108v-bind</router-link> |
    <router-link to="/p143">P143BasicParent</router-link> |
    <router-link to="/p151">P151PropsParent</router-link> |
    <router-link to="/p152">P152CountUpParent</router-link> |
    <router-link to="/p159">P159EmitParent</router-link> |
    <router-link to="/p159_2">P159EmitParent2</router-link> |
    <router-link to="/p165">P165ParentSlot</router-link> |
    <router-link to="/p165_2">P165ParentSlot2</router-link> |
    <router-link to="/p168">P168ParentMultiSlot</router-link> |
    <router-link to="/p172">P172ParentScopeSlot</router-link> |
    <router-link to="/p345">P345</router-link> |
    <router-link to="/p345_2">P345_2</router-link> |
    <router-link to="/p350">P350</router-link> |
    <router-link to="/p353">P353</router-link> |
    <router-link to="/p359">P359</router-link> |
    <router-link to="/compVuex1">compVuex1</router-link> |

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
