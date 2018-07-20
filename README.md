## Fierce
My wife loves [Pusheen](http://pusheen.com/) and I do too. This repo is a [Fitbit Versa](https://www.fitbit.com/shop/versa) watch face featuring Pusheen.

I used the [APNGb](https://github.com/shgodoroja/APNGb) application to take iOS stickers and rip individual frames from the animations.

I do not claim any copyright to Pusheen (which is why I'll never put this watch face on the Fitbit watch face catalog).

[![Preview](dev/screenshot.png)](https://gam.fitbit.com/gallery/clock/91297751-1492-4433-bcd0-4867274a60fd)

### Development
```
cd dev/fonts/please/dark
../../font.sh ../../Please.ttf "#4e2c11" 48 please- custombold 2
cd ../light
../../font.sh ../../Please.ttf "#b5a89c" 48 please- custombold 2
cd ../../please-small/dark
../../font.sh ../../Please.ttf "#4e2c11" 24 please-small- custombold 1
cd ../light
../../font.sh ../../Please.ttf "#b5a89c" 24 please-small- custombold 1
cd ../../../../
```
