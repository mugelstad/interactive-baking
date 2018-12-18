#include "pitches.h"

const int waterSens = A0; //define water sensor
const int LED = 9;//define led to pin 9
int waterVal; //define the water sensor value

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  4, 8, 8, 4, 4, 4, 4, 4
};


void setup() {
  pinMode(LED, OUTPUT); //set led as an output
  pinMode(waterSens, INPUT);//set water sensor as an input
  Serial.begin(9600);  //start the serial port at 9600 bauds
}

void loop() {
  waterVal = analogRead(waterSens); //read the water sensor
  Serial.println(waterVal); //print the value of the water sensor to the serial monitor
  if (waterVal > 200) {
    digitalWrite(LED, HIGH);//if the water sensor senses water turn the led on
    // iterate over the notes of the melody:
    for (int thisNote = 0; thisNote < 8; thisNote++) {
  
      // to calculate the note duration, take one second divided by the note type.
      //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
      int noteDuration = 1000 / noteDurations[thisNote];
      tone(8, melody[thisNote], noteDuration);
  
      // to distinguish the notes, set a minimum time between them.
      // the note's duration + 30% seems to work well:
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);
      // stop the tone playing:
      noTone(8);
      } 
  }
  else {
  digitalWrite(LED, LOW); //if it doesn't sense anything turn the led off
  }
  delay(100);
}
