$(function(){
  $(document.body).bind('touchmove', function (event) {
    event.preventDefault();
  });
  var gid=getquest('id'),pid=0;
  if(gid!=null && gid!="" && typeof(gid)!="undefined")
  {
    pid=gid;
  }
  var sh = window.innerHeight;
  var time=0,name='',cldr,temple=1,purl='';
  $('#container,#wrap,.page,.msg_mark').css('height',sh);
  var mbg=document.getElementById("mbg");
  mbg.load();
  var inscriptionArr = [
    {
      pinyin: 'Pìn yīn1',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn2',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn3',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn4',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn5',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn6',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    },
    {
      pinyin: 'Pìn yīn23',
      title: '贪欲',
      content: [
        '我们最大的贪欲就是自以为是',
        '可以掌控所有事情。'
      ]
    }
  ]
  iniListenSound();
  var loader = new resLoader({
    resources : [
      "http://dsjy.sae.sinacdn.com/img/load_bg.png",
      "http://dsjy.sae.sinacdn.com/img/logo.png",
      "http://dsjy.sae.sinacdn.com/img/load_01.png",
      "http://dsjy.sae.sinacdn.com/img/load_02.png",
      "http://dsjy.sae.sinacdn.com/img/load_03.png",
      "http://dsjy.sae.sinacdn.com/img/load_04.png",
      "http://dsjy.sae.sinacdn.com/img/music_on.png",
      "http://dsjy.sae.sinacdn.com/img/music_off.png",
      "http://dsjy.sae.sinacdn.com/img/msg_01.png",
      "http://dsjy.sae.sinacdn.com/img/msg_btn.png",
      "http://dsjy.sae.sinacdn.com/img/p1_01.png",
      "http://dsjy.sae.sinacdn.com/img/p1_02.png",
      "http://dsjy.sae.sinacdn.com/img/p1_03.png",
      "http://dsjy.sae.sinacdn.com/img/p1_info.png",
      "http://dsjy.sae.sinacdn.com/img/p1_next.png",
      "http://dsjy.sae.sinacdn.com/img/mz_info.png",
      "http://dsjy.sae.sinacdn.com/img/mz_btn.png",
      "http://dsjy.sae.sinacdn.com/img/p2_01.png",
      "http://dsjy.sae.sinacdn.com/img/p2_03.png",
      "http://dsjy.sae.sinacdn.com/img/p2_bg.png",
      "http://dsjy.sae.sinacdn.com/img/p3_01.png",
      "http://dsjy.sae.sinacdn.com/img/p3_02.png",
      "http://dsjy.sae.sinacdn.com/img/p3_03.png",
      "http://dsjy.sae.sinacdn.com/img/p3_05.png",
      "http://dsjy.sae.sinacdn.com/img/p3_06.png",
      "http://dsjy.sae.sinacdn.com/img/p3_07.png",
      "http://dsjy.sae.sinacdn.com/img/p3_bg.png",
      "http://dsjy.sae.sinacdn.com/img/p3_btn01.png",
      "http://dsjy.sae.sinacdn.com/img/p3_btn02.png",
      "http://dsjy.sae.sinacdn.com/img/p3_logo.png"
    ],
    onStart : function(total){
      if(sh<1170){
        $('.load *').addClass('suoxiao')
      }
      $('.load').fadeIn(50);
      $('.load_04').fadeIn(3000);
    },
    onProgress : function(current, total){
      var percent =parseInt(current/total*10);
      $('.load_num').css('width',3.65*percent);
    },
    onComplete : function(total){
      var sti=0;
      var pstt=setInterval(function(){
        sti++;
        $('.load_num').css('width',3.65*sti+36.5);
        if(sti==90){$('.load_02').removeClass('load_02a').addClass('load_02c');}
        if(sti>90){
          clearInterval(pstt);
          bind();
          //pg1();
        }
      },50)
    }
  });
  loader.start();
  //加载动画序列图片到canvas
  var canvas = document.getElementById('tgif');
  var ctx=canvas.getContext('2d');
  var gif=new Array();
  for(i=1;i<146;i++)
  {
    gif[i]=new Image();
    if(i<10){
      gif[i].src=	"http://dsjy.ronghuiad.com/img/xulie/00"+i+".jpg";
    }else if(i<100){
      gif[i].src=	"http://dsjy.ronghuiad.com/img/xulie/0"+i+".jpg";
    }else{
      gif[i].src=	"http://dsjy.ronghuiad.com/img/xulie/"+i+".jpg";
    }
  }
  //初始化
  function bind()
  {
    $('.load_04,.load_03,.load_01').fadeOut(1000,function(){
      $('.load_02').removeClass('load_02c').addClass('load_02b');
    });

    var p101=anime({targets: ['.p1_01'],delay:2000,opacity:[0,1],easing: "linear",duration: 800,autoplay:true})
    anime({targets: ['.p1_02'],delay:2500,opacity:[0,1],easing: "linear",duration: 800,autoplay:true})
    anime({targets: ['.p1_next,.p1_info'],delay:3000,opacity:[0,1],easing: "linear",duration: 800,autoplay:true})
    p101.settings.complete=function()
    {
      $('.p1_01').addClass('shan');
    }
  }
//音乐播放
  if(mbg.played)
  {
    $('#mp3').addClass('pload')
  }else{
    $('#mp3').removeClass('pload')
  }
  //音乐控制
  $('#mp3').bind('touchstart',function(){
    if(mbg.paused)
    {
      mbg.play();
      $(this).addClass('pload')
    }else{
      mbg.pause();
      $(this).removeClass('pload')
    }
  })
  function iniListenSound(){
    document.addEventListener("WeixinJSBridgeReady", function(){
      mbg.play();
      $('#mp3').addClass('pload')
    }, false);
  }
//打开免责信息
  $('.p1_info').bind('click',function(){
    $('.mark').fadeIn(500);
  })
  //关闭免责信息
  $('.mz_btn').bind('click',function(){
    $('.mark').fadeOut(500);
  })
  //关闭提示框
  $('.msg_btn').bind('click',function(){
    $('.msg_01,.msg_mark').fadeOut(300);
  })
  //输入姓名后下一步
  $('.p1_next').bind('click',function(){
    if(pid>0 && pid<23){
      temple=pid;
    }else{
      temple=randoms(1,23);
    }
    name=trim($('#Tname').val());
    if(name==''){
      $('.msg_01,.msg_mark').fadeIn(300);
    }else if(!isChinese(name) || name.length>4){
      $('.msg_01,.msg_mark').fadeIn(300);
    }else{
      // purl='http://dsjy-static.stor.sinaapp.com/poster/a22bdb5c12b9a94b934f8c6cc8fa28cc.jpg';
      purl='img/wine_bottle_bg.jpeg';
      // pg1();
      $('.pg1').removeClass('pg1bg');
      $('.p2_txt').css('top',616).addClass('fangda_1')
      $('#tgif').addClass('fangda_2')

      $('.pg2').fadeIn(500);
      $('.load').fadeOut(900)


      $('.p2_txt').css('background-image','url(http://dsjy.sae.sinacdn.com/img/temple/t'+temple+'.png)');

      // $('.p3_txt').attr('src','http://dsjy.sae.sinacdn.com/img/temple/t'+temple+'.png');
      var htm = ''
      var inscription = inscriptionArr[temple]
      if(inscription){
        var titleCharacters = inscription.title.split('')
        var titHtm = '<p class="titl">'
        for(var i=0; i<titleCharacters.length; i++){
          titHtm += '<span>'+ titleCharacters[i] +'</span>'
        }
        titHtm+='</p>'
      }
      pg2();


      /* $.ajax({
        type: "POST",
        dataType: "json",
        url: 'http://dsjy.ronghuiad.com/api/index.php/api/createPoster',
        data: {
          name: name,
          sort:temple
        },
        success: function(data) {
          //console.log(data)
          if(data.state == 301) {
            $('.msg_01,.msg_mark').fadeIn(300);
          } else if(data.state == 200) {
            if(data.data == undefined) {
              alert('生成失败');
            } else {
              purl=data.data;
              pg1();
            }
          }
        }
      })*/

    }
  })
  //加载咖啡页面
  function pg1()
  {
    $('.pg1').fadeIn(500);
    $('.load').fadeOut(900)
    $('.p2_txt').css('background-image','url(http://dsjy.sae.sinacdn.com/img/temple/t'+temple+'.png)');
    $('.p3_txt').attr('src','http://dsjy.sae.sinacdn.com/img/temple/t'+temple+'.png');
    $('.pg1').addClass('pg1bg');
    anime({targets: ['.p2_01'],delay:800,opacity:[0,1],easing: "linear",duration: 800,autoplay:true})
    anime({targets: ['.logo'],delay:1000,opacity:[0,1],easing: "linear",duration: 800,autoplay:true})
    var p203=anime({targets: ['.p2_03'],delay:1500,opacity:[0,1],easing: "linear",duration: 800,autoplay:true})
    p203.settings.complete=function(){
      $('.p2_03').addClass('shan2')
    }
  }
  //点击播放动画
  $('.p2_03').bind('click',function(){
    time=0,cldr="";
    $('#tgif,.p2_txt').show();
    cldr=setInterval(draw, 1000/24);
    $('.p2_01,.logo,.p2_03').hide();
  })
//播放动画函数
  function draw()
  {
    if(time<9){
      gif[time+1].src="http://dsjy.ronghuiad.com/img/xulie/00"+(time+1)+".jpg";
    }else if(time<99){
      gif[time+1].src="http://dsjy.ronghuiad.com/img/xulie/0"+(time+1)+".jpg";
    }else{
      gif[time+1].src="http://dsjy.ronghuiad.com/img/xulie/"+(time+1)+".jpg";
    }
    if(time>40 && time<=140)
    {
      $('.p2_txt').css('height',(time-40)*3.45);
      $('.p2_txt').css('top',925-(time-40)*3.45);
    }else if(time>140){
      $('.p2_txt').css('height',345);
      $('.p2_txt').css('top',580);
    }
    ctx.drawImage(gif[time+1], 0,0,750,1448);
    time++;
    if(time>=145){
      clearInterval(cldr);
      /*$('.pg1').removeClass('pg1bg');
      $('.p2_txt').css('top',616).addClass('fangda_1')
      $('#tgif').addClass('fangda_2')
      pg2();*/
    }
  }
  function pg2()
  {
    if(sh<1170){
      $('.pg2 *').addClass('suoxiao')
    }
    $('#mp3').hide();
    $('.p3_photo').css('height',sh);
    $('.p3_photo').attr('src',purl);
    $('.p3_name').html(name);
    $('.pg2').show();
    anime({targets: ['.pg2'],delay:2500,opacity:[0,1],easing: "linear",duration: 2000,autoplay:true})
    $('.p3_06').addClass('huxi');
    //$('.p3_01,.p3_02,.p3_03,.p3_name,.p3_05,.p3_06,.p3_txt,.p3_btn01,.p3_btn02').css('opacity',1);
    //anime({targets: ['.p3_01,.p3_02,.p3_03'],delay:800,opacity:[0,1],easing: "linear",duration: 1000,autoplay:true})
    //anime({targets: ['.p3_name,.p3_05,.p3_06,.p3_txt,.p3_btn01,.p3_btn02'],delay:1100,opacity:[0,1],easing: "linear",duration: 1000,autoplay:true})
  }
//重做
  $('.p3_btn01').bind('click',function(){
    temple=randoms(1,23);
    $.ajax({
      type: "POST",
      dataType: "json",
      url: 'http://dsjy.ronghuiad.com/api/index.php/api/createPoster',
      data: {
        name: name,
        sort:temple
      },
      success: function(data) {
        if(data.state == 200) {
          purl=data.data;
          $('.p3_photo').attr('src',purl);
        }
      }
    })
    $('.p3_txt').attr('src','http://dsjy.sae.sinacdn.com/img/temple/t'+temple+'.png');
    anime({targets: ['.p3_txt'],delay:100,opacity:[0,1],easing: "linear",duration: 800,autoplay:true})
//	time=0;
//	$('.pg2').fadeOut(50);
//	$('.p2_txt').removeClass('p2_txta').css('height',0);
//	$('.p2_01,.logo,.p2_03').show();
//	$('.load').show();
//	bind();
  })
//领券
  $('.p3_btn02').bind('click',function(){
    _hmt.push(['_trackEvent', 'button', 'linquan', 'onClick']);
    setTimeout(function(){
      window.location.href="https://m.luckincoffee.com/coupon/qqnews?invitationCode=MK20180518001&from=singlemessage";
    },100)
  })
})