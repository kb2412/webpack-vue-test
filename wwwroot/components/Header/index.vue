<template>
	<header class="header-vue">
		<head-bar>
			<span>index.components</span>
		</head-bar>
		<div id="navLayer">
			<div class="logos text-center">
				<a href="/">
					<img src="" alt="" />
				</a>
			</div>
			<div class="nav-user">
				<ul class="tips-icon">
					<li>
						<a href="/PhotoWall/Index" data-toggle="tooltip" data-placement="bottom" title="案例库" class="icons icon-anli"></a>
					</li>
					<li>
						<a href="/Announcement/Index/619656333" data-toggle="tooltip" data-placement="bottom" title="系统公告" class="icons icon-gg"></a>
					</li>
					<li>
						<a href="http://www.31meijia.com/Pushings/InformationDataForm/ApplyIndex/51480507/520847901?enc=157e007229ac7a3a4a49a4bae9a4362b" data-toggle="tooltip" data-placement="bottom" title="意见反馈" class="icons icon-fk"></a>
					</li>
					<li>
						<a href="javascript:;" class="icons icon-kf linka text-info" data-html="true" data-container="body" data-placement="bottom" data-toggle="popover" data-trigger="hover" data-delay='{"show": 500, "hide": 100 }' data-content="<div class='row' style='border-bottom:1px solid #ccc; margin-bottom:20px; padding:10px;'><div class='col-md-4'><img src='http://static.31meijia.com/img/scrm/userimg.png' style='width:100%'></div><div class='col-md-8'><h3 style='font-size:24px; font-weight:500;'>玛丽<img src='http://static.31meijia.com/img/scrm/user-icon.png'></h3><p style='font-size:14px; color:#999999;margin:0 0 10px;'>官方客服微信</p></div></div><div class='row' style='text-align:center; padding-bottom:20px;'><div style='color:#000; margin-bottom:10px; font-size:14px;'>扫描二维码，添加好友，进行咨询</div><div style='font-size:16px;'><img src='http://static.31meijia.com/img/scrm/menu-helpimg.png'></div></div>" data-original-title=""></a>
					</li>
				</ul>
				<span class="line"></span>
				<div class="user">
					<a href="javascript:;">
						<img src="http://static.31meijia.com/img/scrm/userLogo.png" class="userImg">
						<span>某某某</span>
					</a>
					<ul class="userSet">
						<li>
							<a href="/About/Index">关于XX</a>
						</li>
						<li>
							<a target="_blank" href="http://user.31huiyi.com/my/changepwd">修改密码</a>
						</li>
						<li>
							<a href="/sso/Logout">退出</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="menuLayer" class="menuLayer">
	    <div class="toggleNav"><a href="javascript:;" class="hideMenu"></a></div>
	    <!-- 导航菜单 -->
	    <ul class="menuUL">
	      <li class="menuLi"><a href="/" class="menuLink icon_sy active">首页</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_hd">活动管理</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_yx">自动化营销</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_yxgj">营销工具箱</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_wz">微站管理</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_lxr">通讯录</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_hy">会员管理</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_fx">分销管理</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_wxtg">微信营销</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_sjbb">数据报表</a></li>
	      <li class="menuLi"><a href="javascript:;" class="menuLink icon_xtsz">系统设置</a></li>
		  </ul>
		  <!-- 常用功能 -->
		  <ul class="otherMenu">
		    <h4 class="otherMenu-title">常用功能</h4>
		    <li class="otherMenuLi">
		      <a href="/activities/activitie/index" class="menuLink icon_sy">活动列表</a>
		    </li>
		    <li class="otherMenuLi">
		      <a href="/activities/activitygroup/index" class="menuLink icon_sy">活动分类管理</a>
		    </li>
		    <li class="otherMenuLi">
		      <a href="/activities/activitiessetting/index" class="menuLink icon_sy">活动列表模板管理</a>
		    </li>
		    <li class="otherMenuLi">
		      <a href="/contacts/list" class="menuLink icon_sy">联系人管理</a>
		    </li>
		    <li class="otherMenuLi">
		      <a href="/reward/index" class="menuLink icon_sy">打赏</a>
		    </li>
		  </ul>
	    <!-- 选择导航样式 -->
	    <div class="choose-style">
	      选择导航样式： <div class="pull-right" id="skinInfo">
	        <span class="styles styles1  skinSwitch"></span>
	        <span class="styles styles2 skinSwitch"></span>
	      </div>
	    </div>
		</div>
		<div class="sub-menu">
	    <ul>
	      <li><a href="javascript:;">二级菜单一</a></li>
	      <li><a href="javascript:;">二级菜单二</a></li>
	      <li><a href="javascript:;">二级菜单三</a></li>
	      <li><a href="javascript:;">二级菜单四</a></li>
	    </ul>
		</div>
		<div class="showMneu">
		  <img src="http://static.31meijia.com/images/showMenu.png">
		</div>
	</header>
</template>
<script>
	import 'styles/pages/index-head.scss';
	import HeadBar from 'components/HeadBar';

	export default {
		components: {
			HeadBar,
		}
	}
</script>