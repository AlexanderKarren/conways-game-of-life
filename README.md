# Conway's Game of Life

## Links

* [Trello](https://trello.com/b/sgTAfxMj/conways-game-of-life)
* [Figma](https://www.figma.com/file/savuRtxvXybeHVGU31MGbi/Conway-s-Game-of-Life?node-id=0%3A1)
* [Project Readme](https://github.com/LambdaSchool/CS-Build-Week-1)
* [Example](https://bitstorm.org/gameoflife/)

## Rules

In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.

If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.
From those two rules, many types of "creatures" can be created that move around the "landscape".

Note: cells that are off the edge of the grid are typically assumed to be dead. (In other cases, people sometimes code it up to wrap around to the far side.)

## Features

* [x] Create a few sample cell configurations that users can load and run
* [x] Add an option that creates a random cell configuration that users can run
* [ ] Add additional cell properties, like color or size, and incorporate them into your visualization
* [ ] Allow users to specify the speed of the simulation
* [x] Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
* [ ] Allow users to change the dimension of the grid being displayed
* [ ] Given a specific generation, calculate the configuration of cells at that point in time, and jump to that state, bypassing animation (i.e. skip ahead n generations).
* [ ] On the main entry point of the application, include a separate section or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life

## Bonus Features

* [ ] Implement 2+ additional custom features, above
* [ ] Deploy your app to a hosting service or, for iOS, to TestFlight (or the App Store!). Web devs can see more deployment info here.
* [ ] Write a how-to guide or blog post that walks readers through the work you did to implement your project
Expand your simulation into the third dimension. Google 3D Conways Life. Google for how to do 3D stuff on your platform. Web users might check out 3D-ThreeJS, and iOS might look at SceneKit.
* [ ] Explore alternate algorithms for finding the nth generation, such as Hashlife