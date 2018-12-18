const int redPin = 12;
const int greenPin = 10;
//const int weightPin = 6;
int rawValue; 
int bowlValue = 5; //hard code the bowl value => change this

void setup() {
  // put your setup code here, to run once:
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
//  rawValue = analogRead(weightPin);
  rawValue = 4; //hard code the raw value => change this
    
  //if the bowl is empty => light up red
  if (rawValue <= bowlValue){
    digitalWrite(redPin, HIGH);
    digitalWrite(greenPin, LOW);
  }

  //if the bowl is full => light up green
  else if (rawValue > bowlValue){
    digitalWrite(redPin, LOW);
    digitalWrite(greenPin, HIGH);
  }
}
