// This file is used to keep track of the latest deployed version of the app
// And keep status of the current version of the app (active, inactive, etc.)


// put the newest deployed version here
// in "0.x.x" format

export const version = "0.1.0"

// This section is for when the app is not running (down) and not running to 
// the latest released version. This will be used to display a message on the front end

// Set preset messages for when the app is down here.
// do not change this message for updating status. Use the availability constant for that.
const presetAvailabilityMessages = {
    "db": "The Trek demo is temporarily offline for scheduled database maintenance. Some features may be inaccessible during this time. If you are looking to test or try out the demo, please check again later. We apologize for any inconvenience and appreciate your patience.",
}

// Set as...
// export const availabilty = null; // for when the app is running (no message displayed)
// export const availabilty = presetAvailabilityMessages["db"]; // for when the database is down
export const availabilty = null;


