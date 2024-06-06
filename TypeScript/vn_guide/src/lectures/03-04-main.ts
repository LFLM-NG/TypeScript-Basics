// Number enum

enum Status {
    PENDING,        // 0
    IN_PROGRESS,    // 1
    DONE,           // 2  
    CANCELLED,      // 3
}
// Manually set the first number
// enum Status {
//     PENDING = 3,    // 3
//     IN_PROGRESS,    // 4
//     DONE,           // 5  
//     CANCELLED,      // 6
// }
// Manually set numbers
// enum Status {
//     PENDING = 3,    
//     IN_PROGRESS = 9,   
//     DONE = 13,          
//     CANCELLED = 10,    
// }

// Number enum support reverse mapping
console.log(Status[0]);         // 'PENDING'
console.log(Status['DONE']);    // 2

// String enum: does not support reverse mapping
enum MediaTypes {
    JSON = 'application/json',
    XML = 'application/xml',
}
MediaTypes['JSON'];         // 'application/json'
// MediaTypes['application/json']; //error

// Use enum:
// For static data on frontend, not data from API response
// Not require to reverse map
// Prefer union type for API data return
// type MediaTypes = 'application/json' | 'application/xml'

