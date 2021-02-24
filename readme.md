# DOM `CustomEvent` Capture

I was wondering if it was possible to dispatch a custom event and capture it in
a child element. I knew a bit about the capture phase of an event, but I wasn't
clear on the specifics so I tried to build this demo. During the build, I
realized the bubble/capture phase difference is indeed in the direction of the
propagation (or more precisely, at which point the element actually registers
the event), but only on the path between the dispatching element and the root of
the document. Any children of the dispatching element are outside of this path
in either direction.

My hope was to use custom events for message passing: parent would broadcast
events for the children to react to and dispatch their own events the parent
could register. It looks like there isn't a way to use or abuse the custom
event system to achieve this.

I'll probably end up with a global array of weak references to the event
handlers and each component will just ring up all the handlers each time it
wants to send or receive a message.

## Sources

- https://stackoverflow.com/q/31210434/2715716
- https://stackoverflow.com/q/12503911/2715716

## Running

- Run `python3 -m http.server`
- Go to http://localhost:8000

## To-Do

### Figure out the correct way of placing children to a custom element

I noticed that adding to a custom element using `append` placed the child after
the shadow root and made it not appear. I am not sure if `shadowRoot.append` is
the correct thing to do, but it works as a fix. I don't like this, I assumed
custom elements would just redirect `append` to the shadow root, but they don't.
