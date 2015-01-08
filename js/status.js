StatusUpdate = {};

StatusUpdate.Person = Backbone.Model.extend({});

StatusUpdate.FormView = Backbone.View.extend({
    el: "#status-form",
    
    initialize: function(){
        Backbone.ModelBinding.call(this);
    }
});

StatusUpdate.DisplayView = Backbone.View.extend({
    el: "#display",
    
    events: {
        "click #reset-button": "reset"
    },
    
    initialize: function(){
        Backbone.ModelBinding.call(this);
    },
        
    reset: function(){
        this.model.set({get_status: ""});
    }
});

StatusUpdate.App = function(){
    this.start = function(){
        var person = new StatusUpdate.Person();
        var formView = new StatusUpdate.FormView({model: person});
        var displayView = new StatusUpdate.DisplayView({model: person});
        person.set({get_status: ""});
    }
}
    
$(function(){
    var app = new StatusUpdate.App();
    app.start();
})
    