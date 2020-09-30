let strip: neopixel.Strip = null
// Created By: Vaughn Hatherall
// Created on: September 30
// 
// This program Acts like a traffic light
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(2000)
    basic.pause(1000)
    strip.clear()
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(1000)
    strip.clear()
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(2000)
    basic.pause(1000)
    strip.clear()
})
