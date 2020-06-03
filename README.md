# Tetris game tutorial

Hello, this is a tutorial to create an HTML based tetris game! We'll start by defining the core aspects of the game.

1. We'll manage the game inside a 10 by 20 grid.
2. Tetris consists of 7 geometric figures. All of them are layed down in a 3 by 3 space but the I figures which occupies a 4 by 4 space.
3. Each of the tetromino has 4 rotations.
4. A random tetromino is placed at the top of the game-grid at it's first rotation. After it, it falls at a fixed time interval.
5. The tetromino can be rotated left-wise or right-wise.
6. Tetrominoes can't collide.
7. If a horizontal line is filled with tetrominoes squared, the line is deleted and the tetrominoes squares above it fall.
