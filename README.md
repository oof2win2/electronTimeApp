# A simple Electron app that shows the time
This app gets the local time and elegantly displays it in a window, with the seconds updating and things to make it precise (not as precise as Google servers, though).
I decided to not use Google servers at the moment, partially because I don't know how to submit an API request, partially because I wanted the fun (/nightmare) of having to create my own code and not just work on APIs and styling.

Made using Electron v9.1.0 on macOS 10.15.5, npm 6.14.5


# TODO:
- [X] Work on something to output the hours, minutes and seconds to the Electron window correctly
- [ ] Add an input file to set background and foreground color, font family etc.
- [ ] Remove all references of while loops, even in testing functions
