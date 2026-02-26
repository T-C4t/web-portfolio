      let matrix;
      let fieldSize = 51; // Reduced for better performance
      let cellSize = 8;
      let start = { y: 1, x: 1 };
      let end = { y: fieldSize - 2, x: fieldSize - 2 };
      let pos = { x: start.x, y: start.y };
      let supressAlert = false;
      let startBtn,
        generateMazeBtn,
        resetBtn,
        setFieldSizeBtn,
        setCellSizeBtn,
        setStepsPerFrameBtn,
        setDistanceModeBtn,
        resetPathBtn,
        generateDataSetBtn;
      let go = false;
      let path = [];
      let steps = 0;
      let sT, eT;
      let time = 0;
      let distanceMode = 2; //1 = euclid | 2 = manhattan | 3 = chebyshev

      // Performance optimizations
      let stepsPerFrame = 50; // Increased for faster execution
      let needsRedraw = true;
      let colors = {};
      let visited = new Set(); // Track visited cells more efficiently

      // Pre-compute colors for better performance
      function initColors() {
        colors[0] = [255, 255, 255]; // White - empty
        colors[1] = [0, 0, 0]; // Black - wall
        colors[2] = [255, 100, 100]; // Red - current/visited
        colors[3] = [150, 150, 150]; // Gray - backtracked
        colors[4] = [100, 150, 255]; // Light Blue - final path
      }

      function setup() {
        let canvas = createCanvas(fieldSize * cellSize, fieldSize * cellSize);
        canvas.parent("canvas-container");
        initColors();

        // Create buttons and position them in the controls container
        createControls();

        initializeMatrix();
        needsRedraw = true;
      }

      function createControls() {
        // Create buttons without positioning - we'll use CSS grid
        startBtn = createButton("Start Pathfinding");
        startBtn.parent("controls-container");
        startBtn.mousePressed(() => startPathfinding());

        resetBtn = createButton("Reset Grid");
        resetBtn.parent("controls-container");
        resetBtn.mousePressed(() => resetGrid());

        generateMazeBtn = createButton("Generate Maze");
        generateMazeBtn.parent("controls-container");
        generateMazeBtn.mousePressed(() => generateMaze());

        setFieldSizeBtn = createButton("Set Field Size");
        setFieldSizeBtn.parent("controls-container");
        setFieldSizeBtn.mousePressed(() => setFieldSize());

        setCellSizeBtn = createButton("Set Cell Size");
        setCellSizeBtn.parent("controls-container");
        setCellSizeBtn.mousePressed(() => setCellSize());

        setStepsPerFrameBtn = createButton("Set Steps per Frame");
        setStepsPerFrameBtn.parent("controls-container");
        setStepsPerFrameBtn.mousePressed(() => setSpeed());

        setDistanceModeBtn = createButton("Set Distance Mode");
        setDistanceModeBtn.parent("controls-container");
        setDistanceModeBtn.mousePressed(() => setDistanceMode());

        resetPathBtn = createButton("Reset Path");
        resetPathBtn.parent("controls-container");
        resetPathBtn.mousePressed(() => resetPath());

        generateDataSet = createButton("Generate and Export Results to CSV");
        generateDataSet.parent("controls-container");
        generateDataSet.mousePressed(() => benchmarkAllModesOnMazes());
      }

      function initializeMatrix() {
        matrix = [];
        for (let i = 0; i < fieldSize; i++) {
          matrix[i] = new Array(fieldSize).fill(0);
        }
        visited.clear();
      }

      function updateLayout() {
        resizeCanvas(fieldSize * cellSize, fieldSize * cellSize);
      }

      function draw() {
        if (needsRedraw || go) {
          background(240);
          drawMatrix();
          updateUI();
          needsRedraw = false;
        }

        if (go) {
          // Process multiple steps per frame for faster execution
          for (let i = 0; i < stepsPerFrame && go; i++) {
            step();
            steps++;
          }
          needsRedraw = true;
        }
      }

      function drawMatrix() {
        strokeWeight(0.5);

        // Draw grid efficiently
        for (let i = 0; i < fieldSize; i++) {
          for (let j = 0; j < fieldSize; j++) {
            let colorArr = colors[matrix[i][j]] || colors[0];
            fill(colorArr[0], colorArr[1], colorArr[2]);
            rect(j * cellSize, i * cellSize, cellSize, cellSize);
          }
        }

        // Draw start position (green)
        fill(0, 255, 0);
        let startOffset = cellSize * 0.2;
        rect(
          start.x * cellSize + startOffset,
          start.y * cellSize + startOffset,
          cellSize - 2 * startOffset,
          cellSize - 2 * startOffset,
        );

        // Draw end position (blue)
        fill(0, 0, 255);
        rect(
          end.x * cellSize + startOffset,
          end.y * cellSize + startOffset,
          cellSize - 2 * startOffset,
          cellSize - 2 * startOffset,
        );

        // Draw current position if pathfinding
        if (go) {
          fill(255, 255, 0);
          ellipse(
            pos.x * cellSize + cellSize / 2,
            pos.y * cellSize + cellSize / 2,
            cellSize * 0.6,
          );
        }
      }

      function updateUI() {
        // Update stats in the UI
        document.getElementById("steps-value").textContent = steps;
        document.getElementById("time-value").textContent = Math.round(time);

        let dm;
        switch (distanceMode) {
          case 1:
            dm = "Euclidean";
            break;
          case 2:
            dm = "Manhattan";
            break;
          case 3:
            dm = "Chebyshev";
            break;
        }
        document.getElementById("distance-value").textContent = dm;
      }

      function getDistance(y, x) {
        let dy = end.y - y;
        let dx = end.x - x;

        switch (distanceMode) {
          case 1:
            return dy * dy + dx * dx;
          case 2:
            return Math.abs(dy) + Math.abs(dx);
          case 3:
            return max(dy, dx);
          default:
            return Math.abs(dy) + Math.abs(dx);
        }
      }

      class Tile {
        constructor(y, x) {
          this.x = x;
          this.y = y;
          this.s = matrix[y][x];
          this.d = getDistance(y, x); // Manhattan distance is better for grid-based pathfinding
        }
      }

      function getAdj(y, x) {
        let adj = [];
        let directions = [
          [0, -1],
          [-1, 0],
          [1, 0],
          [0, 1],
        ]; // left, up, down, right

        for (let dir of directions) {
          let newY = y + dir[0];
          let newX = x + dir[1];

          if (newX >= 0 && newX < fieldSize && newY >= 0 && newY < fieldSize) {
            adj.push(new Tile(newY, newX));
          }
        }

        return adj.sort((a, b) => a.d - b.d); // Sort by distance to target
      }

      function step() {
        // Check if we reached the end
        if (pos.x === end.x && pos.y === end.y) {
          matrix[pos.y][pos.x] = 4;
          go = false;
          eT = performance.now();
          time = eT - sT;

          // Mark the final path
          for (let i = 0; i < path.length; i++) {
            if (
              matrix[path[i].y] &&
              matrix[path[i].y][path[i].x] !== undefined
            ) {
              matrix[path[i].y][path[i].x] = 4;
            }
          }
            
            if(!supressAlert){
          setTimeout(() => {
            alert(`Solved in ${Math.round(time)}ms with ${steps} steps!`);
          }, 100);
            }
          return;
        }

        time = performance.now() - sT;

        // Mark current position as visited
        if (matrix[pos.y][pos.x] !== 4) {
          matrix[pos.y][pos.x] = 2;
        }

        let currentKey = `${pos.y},${pos.x}`;
        visited.add(currentKey);

        let adj = getAdj(pos.y, pos.x);
        let foundNext = false;

        // Look for unvisited, non-wall cells first
        for (let i = 0; i < adj.length; i++) {
          let adjKey = `${adj[i].y},${adj[i].x}`;
          if (adj[i].s === 0 && !visited.has(adjKey)) {
            pos.x = adj[i].x;
            pos.y = adj[i].y;
            foundNext = true;
            path.push({ y: pos.y, x: pos.x });
            break;
          }
        }

        // Backtrack if no unvisited cells
        if (!foundNext && path.length > 0) {
          matrix[pos.y][pos.x] = 3; // Mark as backtracked
          let prevPos = path.pop();
          if (prevPos) {
            pos.x = prevPos.x;
            pos.y = prevPos.y;
            foundNext = true;
          }
        }

        // Stop if no valid moves and no path to backtrack
        if (!foundNext) {
          go = false;
          setTimeout(() => {
            alert("No path found!");
          }, 100);
        }
      }


      function startPathfinding() {
        if (!go) {
          resetPathfinding();
          go = true;
          sT = performance.now();
          needsRedraw = true;
        }
      }

      function resetGrid() {
        go = false;
        steps = 0;
        time = 0;
        for (let i = 0; i < fieldSize; i++) {
          for (let j = 0; j < fieldSize; j++) {
            matrix[i][j] = 0;
          }
        }
        resetPathfinding();
        needsRedraw = true;
      }

      function resetPath() {
        go = false;
        steps = 0;
        time = 0;
        path = [];
        visited.clear();
        pos = {
          x: start.x,
          y: start.y,
        };

        // Remove only visited (2), backtracked (3), and path (4) markings
        for (let i = 0; i < fieldSize; i++) {
          for (let j = 0; j < fieldSize; j++) {
            if (
              matrix[i][j] === 2 ||
              matrix[i][j] === 3 ||
              matrix[i][j] === 4
            ) {
              matrix[i][j] = 0;
            }
          }
        }

        needsRedraw = true;
      }

      function resetPathfinding() {
        pos = { x: start.x, y: start.y };
        path = [];
        visited.clear();
        steps = 0;
        time = 0;
      }

      function generateMaze() {
        resetGrid();

        // Fill with walls
        for (let i = 0; i < fieldSize; i++) {
          for (let j = 0; j < fieldSize; j++) {
            matrix[i][j] = 1;
          }
        }

        let stack = [];
        let current = { y: 1, x: 1 };
        matrix[current.y][current.x] = 0;
        stack.push(current);

        while (stack.length > 0) {
          let neighbors = getUnvisitedNeighbors(current.y, current.x);

          if (neighbors.length > 0) {
            let next = neighbors[Math.floor(Math.random() * neighbors.length)];

            // Remove wall between current and next
            let wallY = current.y + Math.floor((next.y - current.y) / 2);
            let wallX = current.x + Math.floor((next.x - current.x) / 2);
            matrix[wallY][wallX] = 0;
            matrix[next.y][next.x] = 0;

            stack.push(next);
            current = next;
          } else {
            current = stack.pop();
          }
        }

        // Ensure start and end are open with some clearance
        matrix[start.y][start.x] = 0;
        matrix[end.y][end.x] = 0;

        // Clear around start and end
        clearAroundPoint(start.y, start.x);
        clearAroundPoint(end.y, end.x);

        needsRedraw = true;
      }

      function clearAroundPoint(y, x) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            let newY = y + dy;
            let newX = x + dx;
            if (
              newY >= 0 &&
              newY < fieldSize &&
              newX >= 0 &&
              newX < fieldSize
            ) {
              matrix[newY][newX] = 0;
            }
          }
        }
      }

      function getUnvisitedNeighbors(y, x) {
        let neighbors = [];
        let directions = [
          [-2, 0],
          [2, 0],
          [0, -2],
          [0, 2],
        ];

        for (let dir of directions) {
          let newY = y + dir[0];
          let newX = x + dir[1];

          if (
            newY > 0 &&
            newY < fieldSize - 1 &&
            newX > 0 &&
            newX < fieldSize - 1 &&
            matrix[newY][newX] === 1
          ) {
            neighbors.push({ y: newY, x: newX });
          }
        }

        return neighbors;
      }

      function setFieldSize() {
        try {
          let newSize = prompt(
            "Set new field size (odd number recommended):",
            fieldSize,
          );
          if (newSize && !isNaN(newSize)) {
            fieldSize = parseInt(newSize);
            if (fieldSize % 2 === 0) fieldSize++; // Make it odd for better maze generation
            end = { y: fieldSize - 2, x: fieldSize - 2 };
            initializeMatrix();
            updateLayout();
            resetGrid();
          }
        } catch (error) {
          console.log("Error setting field size:", error);
        }
      }

      function setCellSize() {
        try {
          let newSize = prompt("Set new cell size (pixels):", cellSize);
          if (newSize && !isNaN(newSize)) {
            cellSize = parseInt(newSize);
            updateLayout();
            needsRedraw = true;
          }
        } catch (error) {
          console.log("Error setting cell size:", error);
        }
      }

      function setSpeed() {
        try {
          let newSpeed = prompt(
            "Set steps per frame (higher = faster):",
            stepsPerFrame,
          );
          if (newSpeed && !isNaN(newSpeed)) {
            stepsPerFrame = parseInt(newSpeed);
          }
        } catch (error) {
          console.log("Error setting speed:", error);
        }
      }

      function generateMazeID() {
        let hash = 2166136261; // FNV offset basis
        for (let i = 0; i < fieldSize; i++) {
          for (let j = 0; j < fieldSize; j++) {
            // Only include walls and paths, ignore visited/pathing states
            let cell = matrix[i][j] === 1 ? 1 : 0;
            hash ^= cell;
            hash *= 16777619;
          }
        }
        return "maze-" + fieldSize + "-" + (hash >>> 0).toString(16); // Convert to unsigned hex
      }

      async function benchmarkAllModesOnMazes() {
  supressAlert = true;

  const dmMap = {
    1: "Euclidean",
    2: "Manhattan",
    3: "Chebyshev",
  };

  // New header: no Run # or Timestamp
  const results = [];
  const header = [
    "Maze ID",
    "Distance Mode",
    "Steps",
    "Time (ms)",
  ];
  results.push(header);

  for (let mazeNum = 1; mazeNum <= 100; mazeNum++) {
    generateMaze();
    await delay(100); // Let the maze render
    const mazeId = generateMazeID();

    for (let dm = 1; dm <= 3; dm++) {
      distanceMode = dm;

      // We still run multiple times for averaging or consistency,
      // but we no longer record the run index.
      for (let run = 1; run <= 5; run++) {
        resetPathfinding();
        resetPath();
        go = true;
        sT = performance.now();

        // Run to completion
        await runPathfindingAsync();

        // Only push Maze ID, Mode, Steps and Time
        results.push([
          mazeId,
          dmMap[dm],
          steps,
          Math.round(time),
        ]);
      }
    }
  }

  downloadCSV(results, "benchmark_results.csv");
  supressAlert = false;
}


      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      // Runs the pathfinding until complete
      function runPathfindingAsync() {
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (!go) {
              clearInterval(interval);
              resolve();
            } else {
              for (let i = 0; i < stepsPerFrame && go; i++) {
                step();
                steps++;
              }
              needsRedraw = true;
            }
          }, 10); // Slight pause for browser responsiveness
        });
      }

      function downloadCSV(data, filename) {
        const csvContent = data
          .map((row) => row.map((val) => `"${val}"`).join(","))
          .join("\n");
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf8;",
        });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      function setDistanceMode() {
        try {
          let newDM = prompt(
            "Set distance calculation mode (1 = euclid | 2 = manhattan | 3 = chebyshev) ",
            distanceMode,
          );
          if (newDM == 1 || newDM == 2 || newDM == 3) {
            distanceMode = parseInt(newDM);
          } else {
            distanceMode = 1;
            console.log("Invalid DM - defaults at 1");
          }
          needsRedraw = true;
        } catch (error) {
          console.log("Error setting distance mode:", error);
        }
      }