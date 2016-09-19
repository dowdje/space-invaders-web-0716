class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.phasersCharge = "uncharged";
    this.warpDrive = "disengaged";
    this.cloaked = false


    if (crew.length > 0){
      this.docked = false
      crew.forEach((member)=>{
        member.currentShip = this
      })

    }
    else {
      this.docked = true
    }

  }




}