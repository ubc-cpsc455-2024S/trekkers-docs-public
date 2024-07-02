---
sidebar_position: 2
---

# Initial Requirements

:::note

A PDF verison of this documentation is available [here](/files/Trek-Requirements.pdf).

:::

The initial project requirements were released on May 25th 2024.

### Minimal Viable Product Requirements

The system (Trek) shall handle the following functionalities:
- Allows the user to create, view, and manage trips, as CRUD operations
- Allows the user to create and manage their own profile, as CRUD operations
- Provides a user-specific interface including list of trips the user is associated with
- Provides a trip creation interface for the users to create a new trip
- Allows a non-authenticated user to access the trip creation interface with most of its features
- Provides an access control interface for a user-created trip with sharing functionalities
- Provide a sign-in interface to a non-authenticated user when saving a user-created trip

The system (Trek) shall support the following non-functional requirements:
- Uses MongoDB to manage user information and support CRUD operations
- Uses MongoDB to store user-created trips

### Standard Requirements

The system (Trek) shall handle the following functionalities:
- Allows multiple users to collaborate on a single trip, with real-time live collaboration
- Allows the user to share a trip via a URL
- Allows the user to search and explore destinations of a city

The system (Trek) shall support the following non-functional requirements:
- Uses internal APIs to aggregate trip information
- Uses external APIs (such as Google Maps Platform API) to obtain information regarding a location

### Stretch Goals

The system (Trek) shall handle the following functionalities:
- Provides ML/AI suggested recommendation to the user regarding a trip
- Provides transportation options and associated costs to the user regarding a trip
- Provides weather information to the user regarding a trip
- Allows the user to interact with the system to automatically create an AI-generated itinerary

The system (Trek) shall support the following non-functional requirements:
- Uses external LLM API to implement and integrate LLM wrapper to the trip planning experience.
