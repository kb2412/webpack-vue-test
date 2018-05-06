<template>
	<div id="app">
	  <heads class="app-vue"></heads>
	  <div class="container-fluid">
	    <div class="layout-app">
	      <router-view></router-view>
	    </div>
    </div>
	</div>
</template>
<script>
  import { Heads } from 'components'
	import 'styles/common/default.css'
	import 'styles/common/scrmGlobal.css'
	import 'jquery'
	import 'slimscroll'
	import 'scripts/common/header.js'

	export default {
		name: 'app',
		components: { Heads }
	}
</script>