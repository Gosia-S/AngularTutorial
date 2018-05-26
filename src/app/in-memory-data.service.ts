import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'English Bay', location: '1790 Beach Avenue, Vancouver, BC', phone: '604.681.2582', map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2602.451928517369!2d-123.144885!3d49.2867816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486722f430b495f%3A0xcda5a95ad89c68fe!2sCactus+Club+Cafe+English+Bay!5e0!3m2!1sen!2sca!4v1527310528082'},
      { id: 2, name: 'Robson', location: '1136 Robson Street, Vancouver BC', phone: '604.687.3278', map: 'https://www.google.ca/maps/place/Cactus+Club+Cafe+Robson/@49.285115,-123.1280683,17z/data=!3m1!4b1!4m5!3m4!1s0x54867180f2e844fb:0xbe51cf36a4ac76da!8m2!3d49.2851115!4d-123.1258742'},
      { id: 3, name: 'Coal Harbour', location: '1085 Canada Place, Vancouver, British Columbia', phone: '604.620.7410' , map: 'https://www.google.ca/maps/place/Cactus+Club+Cafe+Coal+Harbour/@49.2895027,-123.1202166,17z/data=!3m1!4b1!4m5!3m4!1s0x548671837ce7e7f5:0x60248a028fed8b2a!8m2!3d49.2894992!4d-123.1180225'},
      { id: 4, name: 'Yaletown', location: '357 Davie Street, Vancouver BC', phone: '604.685.8070' , map: 'https://www.google.ca/maps/place/Cactus+Club+Caf%C3%A9+Yaletown/@49.2750677,-123.1249794,17z/data=!3m1!4b1!4m5!3m4!1s0x548673d6c2ecac4d:0xe2ebf665f4ac96b9!8m2!3d49.2750642!4d-123.1227853'},
      { id: 5, name: 'Bentall 5', location: '588 Burrard Street, Vancouver BC', phone: '604.682.0933' , map: 'https://www.google.ca/maps/place/Cactus+Club+Cafe+Bentall+5/@49.2854927,-123.1209686,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718220f8032f:0x3d498a04746b8d37!8m2!3d49.2854892!4d-123.1187746'},
      { id: 6, name: 'West Broadway', location: '1530 West Broadway, Vancouver BC', phone: '604.733.0434' , map: 'https://www.google.ca/maps/place/Cactus+Club+Cafe+West+Broadway/@49.2634338,-123.141837,17z/data=!3m1!4b1!4m5!3m4!1s0x548673c7842cf0c7:0x611cca1c47ca8435!8m2!3d49.2634303!4d-123.1396429'}
    ];
    return {heroes};
  }
}

