// Global variable for describe on events from react components
var EventManager = {
    events: {},
    
    addHandler: function(eventName, handler) {
        if (eventName in this.events) {
            this.events[eventName].push(handler);
        }
        else {
            this.events[eventName] = [handler];
        }
    },
        
    removeHandler: function(eventName, handler) { 
        if (eventName in this.events) {
            var index = this.events[eventName].indexOf(handler);
            this.events[eventName].splice(index, 1);
        }
    }
}

// Handle events from client
function trigger(eventName, args) {
    mp.trigger('showUrl', 'pidor1');
    var handlers = EventManager.events[eventName];
    mp.trigger('showUrl', '' + handlers.length);
    handlers.forEach(handler => handler(JSON.parse(args)));
}