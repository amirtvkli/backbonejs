
var AppRouter = Backbone.Router.extend({
    routes:{
        '':'list',
        'menu-items/new':'itemForm',
        'menu-items/:item':'itemDetails'
    },
    
    initialize: ()=>{
        this.menuItemView = new MenuItemDetails({
            category: 'Entree',
            imagepath: 'garden-salad.jpg'
        });
        this.menuView = new MenuView({
            items: [
                'Garden Salad',
                'Pizza',
                'Cheesecak'
            ]
        });
    },
    
    list: ()=>{
        $('#app').html('List Screen'); 
    },
    
    itemDetails:(item)=>{
        //this.menuItemView.set('id',item);
        //this.menuItemView.fetch();
        //this.MenuItemView.options.name = item;
        this.menuItemView.model = this.menuItem.get(item);
        $('#app').html(this.menuItemView.render().el);
    },
    
    itemForm: ()=>{
       console.log('here');
        $('#app').html('New item form');
    }
    
});

let app = new AppRouter();

$(()=>{
    Backbone.history.start();
});