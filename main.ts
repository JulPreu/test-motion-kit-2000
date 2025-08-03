let start = 0
// 0=Geradeaus
// -1=Links
// 1=Rechts
let Richtung = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        start = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        start = 0
    }
    if (start == 1) {
        // Rechts
        if (Richtung == 1) {
            maqueen.setColor(0xff0000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        } else {
            // Links
            if (Richtung == -1) {
                maqueen.setColor(0x0000ff)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            }
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
            maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
            maqueen.setColor(0x00ffff)
        }
    }
})
// Ultraschallsensor drehen, dann messen, ob ein Hindernis kommt, wenn ein Hindernis kommt, dann Variable für andere Richtung setzen
basic.forever(function () {
    // links
    maqueen.servoRun(maqueen.Servos.S1, 120)
    basic.pause(200)
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 20) {
        Richtung = 1
    }
    basic.pause(1000)
    // rechts
    maqueen.servoRun(maqueen.Servos.S1, 60)
    basic.pause(200)
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 20) {
        Richtung = -1
    }
    basic.pause(1000)
    // Geradeaus 
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) > 20) {
        Richtung = 0
    }
})
