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

* Popular presets that the user can choose from to see how the simulation works
* Speed can be specified, or the player can step through each generation one-by-one
* Color of simulation can be changed (what fun!)
* Grid can be displayed or hidden
* Grid layout can be randomized for some wacky stuff
