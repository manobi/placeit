(function ( $ ) {

    $.fn.placeit = function(destiny, order) {
        let $childrens = destiny.children();
        let $parent = this.parent();
        let index = this.index();
        let $el = $(this);

        if (order === undefined || order === null || order >= $childrens.length) {
          this.appendTo(destiny);
        } else if (order <= 0) {
          this.prependTo(destiny);
        } else if (order < $childrens.length) {
          let $el = $childrens.get(order - 1);
          $el = $($el);
          $el.before(this);
        }

        this.restore = function(){
          $el.placeit($parent, index);
        }

        return this;
    };

}( jQuery ));
