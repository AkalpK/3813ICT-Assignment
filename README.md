# Documentation

This project is my submission for the 3813ICT - Software Frameworks Assignment Phase One. Author: Aka Karadeniz.

## Git

Since this project is meant to be undertaken alone, I used Git as a means of backing up my files. I aimed to commit changes every time I made a meaningful and functioning addition to the code. This meant that there was always a safe backup of an up-to-date and working version of the code. The layout of my Git repository is meant to simply reflect my project directory; i.e., all files and folders are in an identical hierarchy, where the 'src' folder is for client-side files and the 'server' foldier is for server-side. The only exception to this: the node_modules folder for both the client and server-side were not included in this repository as they are too large. This is not a concern since they can easily be installed with NPM by referencing the package.json file in the root folder.

## Data Structures

The users and groups are all part of a single JSON file named database.json. This is not the most efficient way of handling the data but I used it as a stopgap for the duration of the assignment. The database.json file includes three seperate arrays called users, groups, and rooms.

| Users | Groups | Rooms |
|-------|--------|-------|
| userName | groupName | roomName |
| Email | members | belongsToGroup |
| ID | | ownedRooms | ownedRooms |
| Role| | |

The table above shows the variables stored for each separate JSON object. Currently, the Users object is used to determine if a user exists (in order to login), Groups is used  to iterate through all the groups and find all the groups which the user is within (by checking the members array) and printing the groupName, and Rooms is currently unused.
## REST API

The principles of REST API are unfortunately not utilized to the fullest possible extent here. As there is a single .json file, the server only listens for a single request, which is for event name 'databaseRequest'. In response to this request, the server sends the database file which is read on startup using socket.io.emit, which automatically decodes the file. The server constantly listens for this request and fulfills it whenever it's heard.

## Angular Architecture

The project is split into two components: **login**, and **dashboard**. 

Traffic is redirected from the root path to Login through the app-routing module and serves as the entry point for users. After being successfuly authorised, the Login component routes the user to Dashboard, where all the main functionalities are executed. There are two services, SocketService, and DatabaseFilterService (not currently functioning). The SocketService handles all communication between the server and client side. I was experimented with DatabaseFilterService as a means of sorting through the data but I found it to be unecessarily complicated. The reality is, the database should be separated into more .JSON files instead of using a service that breaks up the same work into much more. There are no custom models.
