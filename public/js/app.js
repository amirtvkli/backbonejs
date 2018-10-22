var AppRouter = Backbone.Router.extend({
    routes:{
        "":"list",
        "menu-items/new":"itemForm",
        "menu-items/:item":"itemDetails"
    },
    
    initialize: ()=>{
        this.menuItemView = new MenuItemDetails({
            category: 'Entree',
            imagepath: 'garden-salad.jpg'
        });
        this.menuView = new MenuView({
            items: [
                "Garden Salad",
                "Pizza",
                "Cheesecake"
            ]
        });
    },

    list: ()=>{
        $('#app').html('List Screen');
    },
    
    itemDetails:(item)=>{
        this.MenuItemView.options.name = item;
        $('#app').html(view.menuItemView.render().el);
    },
    
    itemForm: ()=>{
        $('#app').html('New item form');
    }
    
});

var app = new AppRouter();

$(()=>{
    Backbone.history.start();
});