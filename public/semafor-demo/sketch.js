let letters = [
  {char: 'A', left: 0, right: 1},
  {char: 'B', left: 0, right: 2},
  {char: 'C', left: 0, right: 3},
  {char: 'D', left: 0, right: 4},
  {char: 'E', left: 5, right: 0},
  {char: 'F', left: 6, right: 0},
  {char: 'G', left: 7, right: 0},
  {char: 'H', left: 1, right: 2},
  {char: 'I', left: 1, right: 3},
  {char: 'J', left: 6, right: 4},
  {char: 'K', left: 4, right: 1},
  {char: 'L', left: 5, right: 1},
  {char: 'M', left: 6, right: 1},
  {char: 'N', left: 7, right: 1},
  {char: 'O', left: 3, right: 2},
  {char: 'P', left: 4, right: 2},
  {char: 'Q', left: 5, right: 2},
  {char: 'R', left: 6, right: 2},
  {char: 'S', left: 7, right: 2},
  {char: 'T', left: 4, right: 3},
  {char: 'U', left: 5, right: 3},
  {char: 'V', left: 7, right: 4},
  {char: 'W', left: 6, right: 5},
  {char: 'X', left: 7, right: 5},
  {char: 'Y', left: 6, right: 3},
  {char: 'Z', left: 7, right: 6},
  {char: ' ', left: 0, right: 0}
];

let left = 0, right = 0;  // Initialize with default values
let video;
let bodyPose;
let poses = [];
let connections;

function preload() {
  // Load the bodyPose model
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);

  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
  // Get the skeleton connection information
  connections = bodyPose.getSkeleton();
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // The indices for the keypoints we want to draw
  const rightHandIndices = [10, 8, 6];
  const leftHandIndices = [9, 7, 5];

  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];

    // Draw right hand keypoints in red
    for (const j of rightHandIndices) {
      if (j < pose.keypoints.length) {
        const keypoint = pose.keypoints[j];
        if (keypoint.confidence > 0.1) {
          fill(255, 0, 0); // Red
          noStroke();
          circle(keypoint.x, keypoint.y, 10);
          right = getAngle(pose.keypoints[6].x, pose.keypoints[6].y, pose.keypoints[10].x, pose.keypoints[10].y);
        }
      }
    }

    // Draw left hand keypoints in green
    for (const j of leftHandIndices) {
      if (j < pose.keypoints.length) {
        const keypoint = pose.keypoints[j];
        if (keypoint.confidence > 0.1) {
          fill(0, 255, 0); // Green
          noStroke();
          circle(keypoint.x, keypoint.y, 10);
          left = getAngle(pose.keypoints[5].x, pose.keypoints[5].y, pose.keypoints[9].x, pose.keypoints[9].y);
        }
      }
    }
  }

 
  // Display the classified letter and debug info in the top-left corner
  textSize(32);
  fill(0);
  text(classify(left, right), 150, 40);
  
  // Debug info
  textSize(16);
  text(`Left Angle: ${left}`, 150, 80);
  text(`Right Angle: ${right}`, 150, 100);



}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
}

function getAngle(x1, y1, x2, y2) {
  if(x1 === x2 && y1 === y2) return 0;
  let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI) - 90;
  // Normalize angle to be between 0 and 360
  if (angle < 0) {
    angle += 360;
  }
  // Round to the nearest 45 degree increment and map to 0-7
  let angleIndex = Math.round(angle / 45) % 8;
  return angleIndex;
}

function classify(left, right) {
  if(left === undefined || right === undefined) return 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].left == left && letters[i].right == right) {
      return letters[i].char;
    }
  }
  return 0;
}