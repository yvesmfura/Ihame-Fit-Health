import React, { useState, useRef } from 'react';
import './Component_Styles/Workout.css';

const Workout: React.FC = () => {
  const [userInput, setUserInput] = useState({
    sex: '',
    bodyType: '',
    bodyPreference: '',
  });

  const [suggestedWorkout, setSuggestedWorkout] = useState<{
    workout: string[];
    description: string;
    dietTips: string;
    lifestyleTips: string;
  } | null>(null);

  const workoutResultRef = useRef<HTMLDivElement>(null);
  const workoutTitleRef = useRef<HTMLHeadingElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const maleBodyTypes = [
    { value: 'ectomorph', label: 'Ectomorph (Thin, lean, fast metabolism)' },
    { value: 'mesomorph', label: 'Mesomorph (Naturally muscular)' },
    { value: 'endomorph', label: 'Endomorph (Larger, slower metabolism)' },
    { value: 'rectangle', label: 'Rectangle (Straight-up-and-down physique)' },
    { value: 'invertedTriangle', label: 'Inverted Triangle (Broad shoulders, narrow waist)' },
  ];

  const femaleBodyTypes = [
    { value: 'hourglass', label: 'Hourglass (Curvy, balanced fat distribution)' },
    { value: 'pear', label: 'Pear (Narrow shoulders, wider hips)' },
    { value: 'apple', label: 'Apple (Broad shoulders, slimmer hips)' },
    { value: 'rectangle', label: 'Rectangle (Athletic, minimal curves)' },
    { value: 'spoon', label: 'Spoon (Larger hips, smaller upper body)' },
  ];

  const maleBodyPreferences = [
    { value: 'athleticMesomorph', label: 'Athletic Mesomorph (Muscular, well-balanced)' },
    { value: 'leanEctomorph', label: 'Lean Ectomorph with Muscle Tone' },
    { value: 'vShape', label: 'V-Shape (Broad shoulders, narrow waist)' },
    { value: 'mesomorphEndomorph', label: 'Balanced Mesomorph-Endomorph' },
    { value: 'shreddedPhysique', label: 'Cut and Shredded Physique' },
  ];

  const femaleBodyPreferences = [
    { value: 'tonedHourglass', label: 'Toned Hourglass (Curves with muscle)' },
    { value: 'slimAthletic', label: 'Slim Athletic (Rectangle with Muscle Tone)' },
    { value: 'curvyPear', label: 'Curvy Pear with Muscle' },
    { value: 'fitHourglass', label: 'Fit and Balanced Hourglass' },
    { value: 'fitLeanApple', label: 'Fit and Lean Apple Shape' },
  ];

  const generateWorkoutPlan = (bodyPreference: string) => {
    let description = '';
    let dietTips = '';
    let lifestyleTips = '';
    let workout: string[] = [];

    switch (bodyPreference) {
      case 'leanEctomorph':
        description = 'You have a naturally slim frame and fast metabolism. Building muscle is key.';
        dietTips = 'Increase calorie intake with lean proteins, healthy fats, and complex carbs.';
        lifestyleTips = 'Focus on weight training and avoid excessive cardio to maintain muscle.';
        workout = [
          'Day 1: Full-Body Strength Training',
          'Day 2: HIIT Cardio (30 min)',
          'Day 3: Core & Abs Workout',
          'Day 4: Rest Day',
          'Day 5: Bodyweight Circuit',
          'Day 6: Active Recovery (Yoga or Light Cardio)',
          'Day 7: Rest or Light Walk',
        ];
        break;

      case 'athleticMesomorph':
        description = 'Naturally muscular, with a balanced physique. You can easily gain or lose muscle.';
        dietTips = 'Maintain a balanced diet with adequate protein for muscle recovery.';
        lifestyleTips = 'A mixture of strength training and cardio will help you maintain your physique.';
        workout = [
          'Day 1: Upper Body Strength Training',
          'Day 2: Lower Body Strength Training',
          'Day 3: Core Workout',
          'Day 4: Rest Day',
          'Day 5: Full-Body Strength Training',
          'Day 6: Cardio (Running or Cycling)',
          'Day 7: Rest or Light Yoga',
        ];
        break;

      case 'vShape':
        description = 'Broad shoulders and narrow waist, focusing on upper body strength and definition.';
        dietTips = 'Consume adequate protein for muscle building, and ensure calorie surplus.';
        lifestyleTips = 'Focus on upper body workouts with balanced lower body training.';
        workout = [
          'Day 1: Chest & Back Workout',
          'Day 2: Shoulders & Arms Strength Training',
          'Day 3: Core & Abs Focus',
          'Day 4: Rest Day',
          'Day 5: Full-Body Workout',
          'Day 6: Cardio (Swimming or Rowing)',
          'Day 7: Rest or Light Walk',
        ];
        break;

      case 'mesomorphEndomorph':
        description = 'A balanced blend of muscle and size. You have an easier time gaining muscle but need to manage fat.';
        dietTips = 'Maintain a balanced diet but watch your calorie intake to avoid fat gain.';
        lifestyleTips = 'Combine strength training with moderate cardio to keep fat levels in check.';
        workout = [
          'Day 1: Full-Body Weightlifting',
          'Day 2: Cardio (Running or Cycling)',
          'Day 3: Leg Day Strength Training',
          'Day 4: Rest Day',
          'Day 5: Upper Body & Core Workout',
          'Day 6: Cardio (HIIT)',
          'Day 7: Rest or Active Recovery',
        ];
        break;

      case 'shreddedPhysique':
        description = 'Focused on being lean with muscle definition. Maintaining low body fat is important.';
        dietTips = 'Consume high protein with low carbs and fats to maintain a calorie deficit.';
        lifestyleTips = 'Focus on muscle definition workouts with cardio to stay lean.';
        workout = [
          'Day 1: Upper Body Strength with Cardio',
          'Day 2: Lower Body Circuit',
          'Day 3: Core & Abs Focus',
          'Day 4: Rest Day',
          'Day 5: Full-Body HIIT',
          'Day 6: Cardio (Running or Cycling)',
          'Day 7: Active Recovery or Rest',
        ];
        break;

      case 'tonedHourglass':
        description = 'Curves with muscle. You want to maintain a slim waist and toned limbs.';
        dietTips = 'Consume lean proteins and healthy carbs to support muscle tone while avoiding fat gain.';
        lifestyleTips = 'Focus on strength training with cardio to maintain your shape.';
        workout = [
          'Day 1: Upper Body Strength Training',
          'Day 2: Lower Body Strength Training',
          'Day 3: Cardio (Running or Cycling)',
          'Day 4: Rest Day',
          'Day 5: Core & Abs Workout',
          'Day 6: HIIT Cardio',
          'Day 7: Rest or Light Walk',
        ];
        break;

      case 'slimAthletic':
        description = 'Athletic physique with lean muscle tone. You want to stay slim but defined.';
        dietTips = 'Maintain a balanced diet with adequate protein and carbs for energy.';
        lifestyleTips = 'Focus on endurance and strength training to maintain an athletic build.';
        workout = [
          'Day 1: Full-Body Strength Training',
          'Day 2: Cardio (Running or Swimming)',
          'Day 3: Core & Abs Circuit',
          'Day 4: Rest Day',
          'Day 5: Lower Body Strength Training',
          'Day 6: HIIT Cardio',
          'Day 7: Rest or Active Recovery',
        ];
        break;

      case 'curvyPear':
        description = 'Curvier lower body with a focus on toning the upper body and slimming the waist.';
        dietTips = 'Consume balanced meals with a focus on protein to support muscle growth and fat loss.';
        lifestyleTips = 'Focus on both upper and lower body workouts to achieve balance.';
        workout = [
          'Day 1: Lower Body Strength Training',
          'Day 2: Upper Body Circuit',
          'Day 3: Core & Cardio Workout',
          'Day 4: Rest Day',
          'Day 5: Full-Body Strength Training',
          'Day 6: Cardio (Cycling or Swimming)',
          'Day 7: Rest or Light Activity',
        ];
        break;

      case 'fitHourglass':
        description = 'Balanced curves with fitness. You aim to maintain muscle tone and keep a slim waist.';
        dietTips = 'Maintain a balanced diet with enough protein to support muscle recovery.';
        lifestyleTips = 'Focus on both strength training and cardio for a balanced fitness regime.';
        workout = [
          'Day 1: Upper Body Strength',
          'Day 2: Lower Body Strength',
          'Day 3: Core & Abs Focus',
          'Day 4: Rest Day',
          'Day 5: Cardio (HIIT or Running)',
          'Day 6: Full-Body Circuit Training',
          'Day 7: Rest or Yoga',
        ];
        break;

      case 'fitLeanApple':
        description = 'You aim for a fit, lean look, focusing on toning your midsection.';
        dietTips = 'Focus on lean proteins and vegetables to maintain a low body fat percentage.';
        lifestyleTips = 'Incorporate full-body strength training with core-specific exercises.';
        workout = [
          'Day 1: Upper Body & Core Strength Training',
          'Day 2: Lower Body Workout',
          'Day 3: Cardio (Running or Cycling)',
          'Day 4: Rest Day',
          'Day 5: Core & Abs Circuit',
          'Day 6: HIIT Cardio',
          'Day 7: Rest or Light Yoga',
        ];
        break;

      default:
        description = 'No workout plan available for this body preference.';
        dietTips = '';
        lifestyleTips = '';
        workout = [];
        break;
    }

    return { workout, description, dietTips, lifestyleTips };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { bodyPreference } = userInput;
    const result = generateWorkoutPlan(bodyPreference);
    setSuggestedWorkout(result);

    // Scroll to the title of the workout plan
    workoutTitleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="workout-plan-container">
      <form className="workout-plan-form" onSubmit={handleSubmit}>
        <label className="workout-plan-label">
          Sex:
          <select name="sex" value={userInput.sex} onChange={handleInputChange} required>
            <option value="">Select your sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="workout-plan-label">
          Body Type:
          <select name="bodyType" value={userInput.bodyType} onChange={handleInputChange} required>
            <option value="">Select your body type</option>
            {userInput.sex === 'male'
              ? maleBodyTypes.map(bodyType => (
                  <option key={bodyType.value} value={bodyType.value}>
                    {bodyType.label}
                  </option>
                ))
              : femaleBodyTypes.map(bodyType => (
                  <option key={bodyType.value} value={bodyType.value}>
                    {bodyType.label}
                  </option>
                ))}
          </select>
        </label>
        <label className="workout-plan-label">
          Body Preference:
          <select
            name="bodyPreference"
            value={userInput.bodyPreference}
            onChange={handleInputChange}
            required
          >
            <option value="">Select your body preference</option>
            {userInput.sex === 'male'
              ? maleBodyPreferences.map(preference => (
                  <option key={preference.value} value={preference.value}>
                    {preference.label}
                  </option>
                ))
              : femaleBodyPreferences.map(preference => (
                  <option key={preference.value} value={preference.value}>
                    {preference.label}
                  </option>
                ))}
          </select>
        </label>
        <button type="submit" className="workout-plan-button">
          Generate Workout Plan
        </button>
      </form>

      {suggestedWorkout && (
        <div className="workout-plan-result" ref={workoutResultRef}>
          <h2 className="workout-plan-result-title">Your Suggested Workout Plan</h2>
          <p className="workout-plan-description">{suggestedWorkout.description}</p>
          <h3 className="workout-plan-subtitle">Workout Schedule:</h3>
          <ul className="workout-plan-list">
            {suggestedWorkout.workout.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
          <h3 className="workout-plan-subtitle">Diet Tips:</h3>
          <p>{suggestedWorkout.dietTips}</p>
          <h3 className="workout-plan-subtitle">Lifestyle Tips:</h3>
          <p>{suggestedWorkout.lifestyleTips}</p>
        </div>
      )}
    </div>
  );
};

export default Workout;
