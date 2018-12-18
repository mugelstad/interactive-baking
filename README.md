# Interactive Baking
Introducing Extra Sensory Input into the Baking Experience

## Why Baking? Why Make it Interactive?
Not only is cooking an important life skill, but cooking can be an outlet of creativity and mindfulness. Our motivation is to get more people to enjoy the experience of cooking no matter their age. children tend to have a shorter attention span and learn better with additional sensory experiences, and baking often includes many stretches of time with repetitive tasks or waiting that could bore young children and make it harder for them to stay engaged with the process. Thus, we want to make it easier for children to stay on task and not be bored during these moments by adding sensory experiences. We want to prioritize multiple forms of sensory input with images, videos, and reactive graphics in order to make the baking process as captivating as possible for younger children. Our Interactive Baking set is targeted at children but is fun for the whole family!

## What's in the Set? How is it Interactive?
The Interactive Baking set is currently made up of three baking tools and an interactive MultiTaction Surface. There is the Happy Bowl, Liquid Sensor Measuring Cup, and a Singing Whisk. 

## Happy Bowl: Visual Encouragement and Guidance
The Happy Bowl has an LED panel and a weight sensor so it can give visual feedback when ingredients are added and the user is progressing through the recipe. The Happy Bowl's weight sensor can sense when ingredients are added to the bowl and can then change the LED display from a red sad face to a green happy face. This offers encouragement for completing the next step of the recipe. 

![Sad Bowl](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1462.png)
![Happy Bowl](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1518.png)
![Bowl Weight Sensor](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1519.png)
![Bowl Circuitry](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1520.png)

## Singing Whisk: Auditory Stimulation for Engagement
The Singing Whisk is a whisk that plays music as you whisk. The music will play as long as you are moving the whisk around, but if you stop, the music stops too. This helps encourage the user to stay on task and follow through, completing the steps of baking. 

![Whisk](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1514.png)
![Whisk Circuitry](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1513.png)

## Liquid Sensor Measuring Cup: Auditory and Visual Feedback
The Liquid Sensor Measuring Cup is used to measure ingredients to add to the mixing bowl. It has a liquid sensor on the side that reads how much liquid is in the cup. When it reaches the amount required by the recipe, and LED flashes on and a buzzer plays a short tune. The measuring cup also has a MultiTaction marker on the bottom so that when the measuring cup is placed on the MultiTaction surface, a visual prompt will appear telling the user what ingredient to measure out next. 

![Liquid Sensor](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1515.png)
![Measuring Cup Circuitry](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/MAG_1517.png)

## MultiTaction Surface: Multi-Sensory Input and Output
The MultiTaction Surface is a collaborative baking surface that offers a range of functions to enhance that baking experience. The functions on it include a recipe book, a timer, cooking videos, and a bowl and measuring cup maker sensors. The MT surface produces a variety of sensory output, from visual to audio, and is a touch-based system. The high level of interactivity can help keep children entertained and invested throughout the baking process. 

## Design Progression

![Original Idea](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/original_idea.png)
![Iteration](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/iteration.png)
![Final Product](https://raw.githubusercontent.com/mugelstad/interactive-baking/master/photos/final_product.png)

## Where do We Want to Take it in the Future?
We have several goals for how we want to continue improving the baking set from its current manifestation. First, we want to implement Bluetooth connections on all the baking set items so there are no cords getting in the way whilst baking. Second, we want to improve our electronic protection covers so that they keep our electronic elements safe from the messiness of baking and also allow children to view the mechanics for education and engagement purposes. We would also like to add more elements to our MultiTaction Surface, such as a progress bar for each recipe, and a checklist showing which recipes have been completed. Finally, we would like to add features that support the use for people of varying abilities, for example those with Alzheimer’s disease or cognitive disabilities.

# How to Use Our Code

## MultiTaction Surface
Upload the folder labled MultiTaction_surface to the computer attached to the MT Surface. Using a Windows computer, double click the run.bat file to run our program. On a Mac, this must be run through the command line. Use the two codes as sensors on the MT Surface and place them where it says "Place Bowl Here" and "Place Measuring Cup Here". 

## Happy Bowl
Upload the folder labled happy_bowl to the computer attached to the sewable arduino. Configure the path to the HX711 folder on your computer to attach the weight sensor capabilites. Upload the happyBowl.ino code to the sewable arduino with the bowl on the weight sensor. Add ingredients to the bowl when prompted.

## Singing Whisk
Upload the folder labeled accelerometer_whisk to the computer attached to the arduino and upload the accelerometer.ino code to the arduino. Pick up the whisk and start to turn it. 

## Liquid Sensor Measuring Cup
Upload the folder labeled liquid_sensor to the computer attached to the arduino and upload the liquid_sensor.ino code to the arduino. Fill the measuring cup with liquid until you see it light up and feel/hear it buzz.

