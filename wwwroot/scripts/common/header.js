$(function () {
  /* 左侧菜单自定义滚动条 */
  var h = window.innerHeight + 'px'

  $('#menuLayer').slimScroll({
    width: '200px',
    height: h,              //容器高度,默认250px
    size: '0px',            //滚动条宽度,默认7px
    color: '#1bbae4',       //滚动条颜色,默认#000000
    alwaysVisible: false,   //是否禁用隐藏滚动条,默认false
    distance: '0',          //距离边框距离,位置由position参数决定,默认1px
    start: $('.menuUL'),    //滚动条初始位置,可选值top,bottom,$(selector)--内容元素位置,默认top
    railVisible: true,      //滚动条背景轨迹,默认false
    railColor: '#222',      //滚动条背景轨迹颜色,默认#333333
    railOpacity: 0.6,       //滚动条背景轨迹透明度,默认0.2
    wheelStep: 10,          //滚动条滚动值,默认10px
    allowPageScroll: true,  //滚动条滚动到顶部或底部时是否允许页面滚动,默认false
    disableFadeOut: true,    //是否禁用鼠标在内容处一定时间不动隐藏滚动条,当设置alwaysVisible为true时该参数无效,默认false
    //scrollTo:'50px',      //跳转到指定的滚动值。可以呼吁任何元素slimScroll已经启用了吗(没试过)
    //scrollBy:'50px',      //增加/减少当前滚动值由指定的数量(正面或负面)。可以呼吁任何元素slimScroll已经启用(没试过)
    //touchScrollStep:1000 //可以设置不同的触摸滚动事件的敏感性。负数反转方向滚动,默认200
  })

  /* 右上角下拉 */
  $('.user').on('mouseenter', function () {
    $('.userSet').fadeIn('slow')
  }).on('mouseleave', function () {
    $('.userSet').fadeOut('slow')
  })
  
  
  /* 改变窗口大小 */
  $(window).resize(function() {
    $('.slimScrollDiv, #menuLayer').css('height', h)
  })

  /* 显示一级菜单*/
  $('.hideMenu').on('click', function () {
    $('.choose-style, .toggleNav').hide()
    $('.slimScrollDiv').animate({
      opacity: 0,
      left: '-=200',
      top: '+=100%',
      height: 'animated slideOutLeft'
    }, function () {
      $('.slimScrollDiv').hide()
    })
    $('.showMneu').show('slow').addClass("animated bounceIn")
    $(".hideMenu").attr("data-ishide",true)
  })

  /* 隐藏一级菜单*/
  $('.showMneu').on('click', function () {
    $('.toggleNav, .choose-style').show()
    $('.showMneu').hide()
    $('.slimScrollDiv').animate({
      opacity: 1,
      left: '+=200',
      top: '0',
      height: 'animated slideOutRight'
    }, 500, function () {
      $('.slimScrollDiv').show()
    })

    $(".hideMenu").attr("data-ishide",false)
  })


  /* 显示隐藏二级菜单 */

  $('.otherMenu .otherMenuLi a').attr('data-submenu', ' ')
  $('.menuUL li a').on('mouseenter', function () {
    var subMenus = eval("(" + $(this).attr('data-submenu') + ")")
    if (subMenus != undefined && subMenus.length > 0) {
      var submenu = ""
      subMenus.forEach(function (e) {
        submenu += "<li><a href='" + e.Url + "'>" + e.KeyName + "</a></li>"
      })
      $(".sub-menu ul").html(submenu)
      $('.sub-menu').show()
    }
    else {
      $('.sub-menu').hide()
    }
  })
  $('.toggleNav, .otherMenu').on('mouseenter', function () {
    $('.sub-menu').hide()
  })
  $('.sub-menu').on('mouseleave', function () {
    $(this).hide()
  })
  ///初始化显示上次保存的皮肤
  var  activeSkin=".styles1"
  InitSkin(activeSkin,activeSkin==".styles2"?true:false)

  /* 模版换肤 */

  $('.styles2').on('click', function () {
    $(".skinLink").attr("href")
    InitSkin(".styles2",true)
    switchSkin(2)
  })
  $('.styles1').on('click', function () {
    InitSkin(".styles1",false)
    switchSkin(1)
  })
  ///初始化显示方法
  function InitSkin(showObj, flag) {
    $("#skinInfo").find("span").removeClass('active')
    $(showObj).addClass('active')
    if (flag) {
      $(".skinLink").attr("href","../../stylesheets/common/blue.css")
    } else {
      $(".skinLink").attr("href","../../stylesheets/common/default.css")
    }
  }

  ///切换皮肤保存到数据库
  function switchSkin(skin) {
    $.post('/ss/edss/', { skin: skin , memberId: 608718829}, function () {
    })
  }
})