(function($){
  $.fn.minMenu = function(options){
    var opts = $.extend( {}, $.fn.minMenu.defaults, options );
    var menu = $(this);
    var param;
    menu.css('position','absolute');
    menu.hide();
    $(opts.area,document.body).on('click',function(event){
      if ($(opts.area, event.target)) {
        param = $(this).attr('menu-param');
        var x = event.pageX;
        var y = event.pageY;
        var menuWidth = menu.prop('scrollWidth');
        var menuHeight = menu.prop('scrollHeight');
        var screenWidth = document.body.scrollWidth;
        var screenHeight = document.body.scrollHeight;
        if (x + menuWidth > screenWidth) x = screenWidth - menuWidth - 2;
        if (y + menuHeight > screenHeight) y = screenHeight - menuHeight - 2;
        event.stopPropagation();
        menu.offset({left:x,top:y});
        menu.show();
      }
    });
    return this.each(function(){
      $('.menu-item',menu).each(function(){
        var $this = $(this);
        var menuId = $this.attr('menu-id');
        var menuData = $this.attr('menu-data');
        $this.on('click',{menuId:menuId,menuData:menuData},function(event){
          opts.delegate(event.data.menuId,event.data.menuData,param);
        });
      });
    });
  };
  $.fn.minMenu.defaults = {
      area:'body',
      delegate: function(menuId,menuData,param){}
  };
})(jQuery)
