// export const exercises = [
//   {
//     name: "Incline Dumbbell Press",
//     slug: "incline-dumbbell-press",
//     muscle: "Chest",
//     sets: "4",
//     reps: "8–12",
//     video: "https://www.youtube.com/embed/ThJGIFDqiiA",
//     description:
//       "Incline dumbbell press targets the upper chest while also engaging shoulders and triceps.",
//     musclesWorked: ["Upper Chest", "Front Deltoids", "Triceps"],
//     steps: [
//       "Set bench to 30–45 degrees.",
//       "Hold dumbbells at shoulder level.",
//       "Press dumbbells upward until arms extend.",
//       "Lower slowly with control.",
//     ],
//     tips: [
//       "Use controlled reps",
//       "Avoid locking elbows",
//       "Focus on upper chest contraction",
//     ],
//   },

//   {
//     name: "Lat Pulldown",
//     slug: "lat-pulldown",
//     muscle: "Back",
//     sets: "4",
//     reps: "10–12",
//     video: "",
//     description:
//       "Lat pulldown is a fundamental back exercise that builds width and strength.",
//     musclesWorked: ["Lats", "Upper Back", "Biceps"],
//     steps: [
//       "Grip the bar wider than shoulders.",
//       "Pull bar down to upper chest.",
//       "Squeeze lats at bottom.",
//       "Slowly return to start.",
//     ],
//     tips: [
//       "Avoid swinging",
//       "Pull elbows down, not hands",
//       "Control the negative",
//     ],
//   },

//   {
//     name: "Barbell Squat",
//     slug: "barbell-squat",
//     muscle: "Legs",
//     sets: "4",
//     reps: "6–10",
//     video: "",
//     description:
//       "Barbell squat is a compound movement that builds leg strength and size.",
//     musclesWorked: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
//     steps: [
//       "Place bar on upper back.",
//       "Stand shoulder-width apart.",
//       "Lower hips until thighs are parallel.",
//       "Drive through heels to stand.",
//     ],
//     tips: [
//       "Keep chest up",
//       "Brace core before descending",
//       "Do not rush reps",
//     ],
//   },

//   {
//   name: "Barbell Shoulder Press",
//   slug: "barbell-shoulder-press",
//   muscle: "Shoulders",
//   sets: "4",
//   reps: "8–10",
//   video: "",
//   description:
//     "Barbell shoulder press is a compound movement that builds overall shoulder strength and size.",
//   musclesWorked: ["Front Deltoids", "Side Deltoids", "Triceps"],
//   steps: [
//     "Grip the bar slightly wider than shoulder-width.",
//     "Press the bar overhead until arms are fully extended.",
//     "Lower the bar slowly to shoulder level.",
//   ],
//   tips: [
//     "Avoid excessive lower back arch",
//     "Do not lock elbows aggressively",
//     "Control the bar path",
//   ],
// },

// {
//   name: "Lateral Raises",
//   slug: "lateral-raises",
//   muscle: "Shoulders",
//   sets: "4",
//   reps: "12–15",
//   video: "",
//   description:
//     "Lateral raises isolate the side delts and help build shoulder width.",
//   musclesWorked: ["Side Deltoids"],
//   steps: [
//     "Hold dumbbells at your sides.",
//     "Raise arms until parallel to the floor.",
//     "Lower slowly with control.",
//   ],
//   tips: [
//     "Use light to moderate weight",
//     "Avoid swinging the dumbbells",
//     "Keep slight bend in elbows",
//   ],
// },

// {
//   name: "Barbell Curl",
//   slug: "barbell-curl",
//   muscle: "Biceps",
//   sets: "3",
//   reps: "10–12",
//   video: "",
//   description:
//     "Barbell curl is a fundamental biceps exercise for building arm size and strength.",
//   musclesWorked: ["Biceps"],
//   steps: [
//     "Grip the bar shoulder-width apart.",
//     "Curl the bar up while keeping elbows close.",
//     "Lower the bar slowly to starting position.",
//   ],
//   tips: [
//     "Avoid swinging the body",
//     "Squeeze biceps at the top",
//     "Control the negative",
//   ],
// },

// {
//   name: "Tricep Rope Pushdown",
//   slug: "tricep-rope-pushdown",
//   muscle: "Triceps",
//   sets: "3",
//   reps: "12–15",
//   video: "",
//   description:
//     "Tricep rope pushdown isolates the triceps and improves arm definition.",
//   musclesWorked: ["Triceps"],
//   steps: [
//     "Grip rope with palms facing each other.",
//     "Push rope down until arms are extended.",
//     "Slowly return to starting position.",
//   ],
//   tips: [
//     "Keep elbows tucked",
//     "Do not use body momentum",
//     "Focus on full extension",
//   ],
// },


//   // Remaining exercises can stay basic for now
// ];
export const exercises = [
  {
    slug: "incline-dumbbell-press",
    name: "Incline Dumbbell Press",
    muscle: "Chest",
    description:
      "The incline dumbbell press targets the upper chest and helps build balanced chest strength.",
    video: "https://www.youtube.com/embed/ThJGIFDqiiA",
    sets: "4",
    reps: "8–12",
    musclesWorked: ["Upper Chest", "Front Delts", "Triceps"],
    steps: [
      "Set bench to a 30–45 degree incline",
      "Hold dumbbells at chest level",
      "Press upward until arms are extended",
      "Lower slowly with control",
    ],
    tips: [
      "Do not lock elbows",
      "Control the negative",
      "Keep feet planted",
    ],
  },

  {
    slug: "lat-pulldown",
    name: "Lat Pulldown",
    muscle: "Back",
    description:
      "Lat pulldowns build width in your back and strengthen the lats.",
    video: "",
    sets: "4",
    reps: "10–12",
    musclesWorked: ["Lats", "Upper Back", "Biceps"],
    steps: [
      "Grip the bar wider than shoulders",
      "Pull bar to upper chest",
      "Squeeze shoulder blades",
      "Return slowly",
    ],
    tips: [
      "Avoid using momentum",
      "Pull with elbows, not hands",
    ],
  },

  {
    slug: "barbell-squat",
    name: "Barbell Squat",
    muscle: "Legs",
    description:
      "Barbell squats are a compound movement for building leg strength and mass.",
    video: "",
    sets: "4",
    reps: "6–10",
    musclesWorked: ["Quads", "Glutes", "Hamstrings", "Core"],
    steps: [
      "Place bar on upper back",
      "Stand shoulder-width apart",
      "Lower until thighs are parallel",
      "Drive up through heels",
    ],
    tips: [
      "Keep chest upright",
      "Do not collapse knees inward",
    ],
  },

  {
    slug: "barbell-shoulder-press",
    name: "Barbell Shoulder Press",
    muscle: "Shoulders",
    description:
      "A compound movement to build overall shoulder strength.",
    video: "",
    sets: "4",
    reps: "6–10",
    musclesWorked: ["Shoulders", "Triceps", "Upper Chest"],
    steps: [
      "Grip bar at shoulder width",
      "Press bar overhead",
      "Lower under control",
    ],
    tips: [
      "Brace your core",
      "Avoid excessive lower back arch",
    ],
  },

  {
    slug: "lateral-raises",
    name: "Dumbbell Lateral Raises",
    muscle: "Shoulders",
    description:
      "Lateral raises isolate the side delts for shoulder width.",
    video: "",
    sets: "3",
    reps: "12–15",
    musclesWorked: ["Side Delts"],
    steps: [
      "Hold dumbbells at sides",
      "Raise arms to shoulder height",
      "Lower slowly",
    ],
    tips: [
      "Use light weights",
      "Do not swing the dumbbells",
    ],
  },

  {
    slug: "barbell-curl",
    name: "Barbell Curl",
    muscle: "Biceps",
    description:
      "A classic biceps exercise for size and strength.",
    video: "",
    sets: "3",
    reps: "8–12",
    musclesWorked: ["Biceps"],
    steps: [
      "Hold bar with underhand grip",
      "Curl bar toward chest",
      "Lower slowly",
    ],
    tips: [
      "Keep elbows tucked",
      "Avoid swinging",
    ],
  },

  {
    slug: "tricep-rope-pushdown",
    name: "Tricep Rope Pushdown",
    muscle: "Triceps",
    description:
      "An isolation exercise to build tricep definition.",
    video: "",
    sets: "3",
    reps: "12–15",
    musclesWorked: ["Triceps"],
    steps: [
      "Grip rope with both hands",
      "Push down until arms extend",
      "Slowly return",
    ],
    tips: [
      "Spread rope at the bottom",
      "Keep elbows fixed",
    ],
  },

  {
    slug: "seated-cable-row",
    name: "Seated Cable Row",
    muscle: "Back",
    description:
      "Targets mid-back thickness and posture strength.",
    video: "",
    sets: "4",
    reps: "10–12",
    musclesWorked: ["Middle Back", "Lats", "Biceps"],
    steps: [
      "Sit upright and grip handle",
      "Pull toward waist",
      "Squeeze shoulder blades",
    ],
    tips: [
      "Avoid leaning back",
      "Control the movement",
    ],
  },

  {
    slug: "leg-press",
    name: "Leg Press",
    muscle: "Legs",
    description:
      "A machine-based leg movement for quad and glute development.",
    video: "",
    sets: "4",
    reps: "10–15",
    musclesWorked: ["Quads", "Glutes"],
    steps: [
      "Place feet shoulder-width",
      "Lower sled under control",
      "Press back up",
    ],
    tips: [
      "Do not lock knees",
      "Keep lower back supported",
    ],
  },

  {
    slug: "plank-hold",
    name: "Plank Hold",
    muscle: "Core",
    description:
      "An isometric core exercise for stability and endurance.",
    video: "",
    sets: "3",
    reps: "30–60 sec",
    musclesWorked: ["Core", "Shoulders"],
    steps: [
      "Place forearms on floor",
      "Keep body straight",
      "Hold position",
    ],
    tips: [
      "Do not sag hips",
      "Breathe steadily",
    ],
  },
];
