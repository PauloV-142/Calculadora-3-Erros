// Map each keyboard key to its correspondent on MicroBit's {a} {b} buttons.
mappings = {
  a: 'a',
  d: 'b',
  ArrowLeft: 'a',
  ArrowRight: 'b',
  b: 'b',
};

// Microbit Buttons's ID goes here:
buttons = {
  a: document.getElementById('btnA'),
  b: document.getElementById('btnB')
};

buttons.a.onclick = () => console.log('a');
buttons.b.onclick = () => console.log('b');


// Click the button
function keydownHandler(event) {
  console.log(mappings[event.key])
  let button = buttons[mappings[event.key]];
 	button.fireEvent('pointerdown');
  button.fireEvent('pointerleave');
  button.fireEvent('pointerup');
}

document.body.addEventListener('keydown', keydownHandler);