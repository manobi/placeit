(function ( $ ) {

    $.fn.placeit = function(destiny, order) {
        let $childrens = destiny.children();

        if (order === undefined || order === null || order >= $childrens.length) {
          return this.appendTo(destiny);
        } else if (order <= 0) {
          return this.prependTo(destiny);
        } else if (order < $childrens.length) {
          let $el = $childrens.get(order - 1);
          $el = $($el);
          return $el.before(this);
        }
    };

}( jQuery ));
