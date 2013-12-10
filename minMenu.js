(function($){
  $.fn.minMenu = function(options){
    var opts = $.extend( {}, $.fn.minMenu.defaults, options );
    var menu = $(this);
    menu.css('position','absolute');
    menu.hide();
    $(opts.area,document.body).on('click',function(){
      var x = event.pageX;
      var y = event.pageY;
      event.stopPropagation();
      menu.offset({left:x,top:y});
      menu.show();
    });
    return this.each(function(){
      $('.menu-item',menu).each(function(){
        $this = $(this);
        var menuId = $this.attr('menu-id');
        var menuData = $this.attr('menu-data');
        $this.on('click',{menuId:menuId,menuData:menuData},function(event){
          opts.delegate(event.data.menuId,event.data.menuData);
        });
      });
    });
  };
  $.fn.minMenu.defaults = {
      area:'body',
      delegate: function(menuId,menuData){}
  };
})(jQuery)
