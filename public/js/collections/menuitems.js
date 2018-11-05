import Backbone from 'backbone';

let MenuItems = Backbone.Collection.extend({
    comprator: 'name', // sort ascending
    model: MenuItems,
    url: '/items'
})