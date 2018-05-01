function init() {
  can = document.getElementById('can').getContext("2d")
  can.addEventListener('keypress', function(e){
    switch(e){
      case X:
        jump()
      case Y:
        fire()
      case A:
        swap()
      case B:
        lurch()
    }
  })
}