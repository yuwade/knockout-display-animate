;(function (factory) {
    if (typeof define === "function" && define.amd) {
        define([ "knockout" ], factory);
    } else {
        factory(ko);
    }
}(function (ko) {
    ko.bindingHandlers.animate = {
        init: function(element, valueAccessor){
            var data = ko.unwrap(valueAccessor());
            var show = ko.unwrap(data.show);
            if(show){
                $(element).show('slow');
            }else{
                $(element).hide('slow');
            }
        },
        update: function(element, valueAccessor){
            var data = ko.unwrap(valueAccessor());
            var show = ko.unwrap(data.show);
            if(show){
                $(element).show('slow');
            }else{
                $(element).hide('slow');
            }
        }
    }
}))