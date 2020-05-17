import React from 'react';

const dataAttribute = 'tap';
const tapActiveValue = 'active';
const capture = false;

let isTouchDevice = false;

const getInteractiveEl = (event: Event) => {
  try {
    return event
      .composedPath()
      .find((el) => {
        const anchor = el as HTMLAnchorElement;
        return anchor.dataset && anchor.dataset[dataAttribute] !== undefined;
      }) as HTMLAnchorElement;
  } catch (e) {
    return undefined;
  }
};

const removeClass = (event: Event) => {
  const interactiveEl = getInteractiveEl(event);
  if (!interactiveEl) return;
  if (event.type === 'click') {
    // keep the tap style on 1 tick later in case the UI blocks
    setTimeout(() => { interactiveEl.dataset[dataAttribute] = ''; });
  } else { interactiveEl.dataset[dataAttribute] = ''; }
};

// use "click" instead of "touchend" because it is triggered after touchend
// and we want the tap styles to stay on the element as long as possible
// (this makes a difference at least on later iOS versions)
const removeActiveClassEvents = ['touchmove', 'touchcancel', 'click'];
function removeTouchListeners() {
  // we only need to add these listeners if it's a touch device
  // eslint-disable-next-line max-len
  removeActiveClassEvents.forEach((eventName: string) => document.body.addEventListener(eventName, removeClass, capture));
}

const onTouchStart = (event:Event) => {
  if (!isTouchDevice) {
    isTouchDevice = true;
    removeTouchListeners();
  }
  const interactiveEl = getInteractiveEl(event);
  if (interactiveEl) {
    interactiveEl.dataset[dataAttribute] = tapActiveValue;
  }
};

function addTapListeners() {
  document.body.addEventListener('touchstart', onTouchStart, capture);
}

function removeTapListeners() {
  document.body.removeEventListener('touchstart', onTouchStart, capture);
  removeTouchListeners();
}

export default function useTapToggle() {
  React.useEffect(() => {
    addTapListeners();
    return removeTapListeners;
  }, []);
}
