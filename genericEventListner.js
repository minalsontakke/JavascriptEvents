function eventListener(eventTarget, eventType, eventHandler) {
    if (eventTarget.addEventListener) {
        eventTarget.addEventListener(eventType, eventHandler,false);
    } else if (eventTarget.attachEvent) {
        eventType = "on" + eventType;
        eventTarget.attachEvent(eventType, eventHandler);
    } else {
        eventTarget["on" + eventType] = eventHandler;
    }
}

function clickHandler(e) {
    e = e || window.event;
    //do something with event and process event
}

//to use the generic event handler, call it something as below

eventListener(document, "click", clickHandler);
