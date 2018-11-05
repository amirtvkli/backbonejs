
let MenuView = Backbone.View.extend({
    template: Handlebars.compile(
        '<ul>'+
        '{{#each items}}<li>{{this}}</li>{{/each}}'+
        '</ul>'
    ),

    initialize: ()=>{
        this.listenTo(this.collection, 'reset', this.render);
    },

    render: () =>{
        this.$.el.html(this.template(this.options));
        return this;
    }
});