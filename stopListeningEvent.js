function stopListeningEvent (eventTarget,eventType,eventHandler) {
    if (eventTarget.removeEventListener) {
        eventTarget.removeEventListener(eventType,eventHandler,false);
    } else if (eventTarget.detachEvent) {
    eventType = "on" + eventType;
    eventTarget.detachEvent(eventType,eventHandler);
    } else {
        eventTarget["on" + eventType] = null;
    }
}
