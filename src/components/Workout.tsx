import React, { useState, useRef } from 'react';
import './Component_Styles/Workout.css';

const Workout: React.FC = () => {
  const [userInput, setUserInput] = useState({
    age: '',
    sex: '',
    bodyType: '',
    bodyPreference: '',
  });

  const [suggestedWorkout, setSuggestedWorkout] = useState<{ workout: string[], description: string, dietTips: string, lifestyleTips: string } | null>(null);

  const workoutResultRef = useRef<HTMLDivElement>(null);

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
          'Day 5: Full-Body Strength Training',
          'Day 6: HIIT Cardio',
          'Day 7: Rest or Light Yoga',
        ];
        break;
  
      case 'fitLeanApple':
        description = 'Focused on maintaining a fit and lean body, especially slimming the midsection.';
        dietTips = 'Focus on a low-carb, high-protein diet to stay lean and toned.';
        lifestyleTips = 'Work on core exercises and cardio to keep fat off while maintaining muscle.';
        workout = [
          'Day 1: Core & Abs Workout',
          'Day 2: Upper Body Strength Training',
          'Day 3: Cardio (Running or Swimming)',
          'Day 4: Rest Day',
          'Day 5: Lower Body Strength Training',
          'Day 6: HIIT Cardio',
          'Day 7: Active Recovery or Rest',
        ];
        break;
  
      default:
        description = 'Select a valid body preference to get workout recommendations.';
        workout = [];
        dietTips = '';
        lifestyleTips = '';
    }
  
    setSuggestedWorkout({ workout, description, dietTips, lifestyleTips });
  };
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateWorkoutPlan(userInput.bodyPreference);
  };

  return (
    <div className="workout-container">
      <h2>Create Your Personalized Workout Plan</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sex" className="workout-label">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={userInput.sex}
          onChange={handleInputChange}
          className="workout-select"
          required
        >
          <option value="">Select your sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="bodyType" className="workout-label">Body Type:</label>
        <select
          id="bodyType"
          name="bodyType"
          value={userInput.bodyType}
          onChange={handleInputChange}
          className="workout-select"
          required
        >
          <option value="">Select your body type</option>
          {userInput.sex === 'male'
            ? maleBodyTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))
            : femaleBodyTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
        </select>

        <label htmlFor="bodyPreference" className="workout-label">Body Preference:</label>
        <select
          id="bodyPreference"
          name="bodyPreference"
          value={userInput.bodyPreference}
          onChange={handleInputChange}
          className="workout-select"
          required
        >
          <option value="">Select your body preference</option>
          {userInput.sex === 'male'
            ? maleBodyPreferences.map(pref => (
                <option key={pref.value} value={pref.value}>
                  {pref.label}
                </option>
              ))
            : femaleBodyPreferences.map(pref => (
                <option key={pref.value} value={pref.value}>
                  {pref.label}
                </option>
              ))}
        </select>

        <button type="submit" className="workout-button">Generate Plan</button>
      </form>

      {suggestedWorkout && (
        <div ref={workoutResultRef} className="workout-result">
          <h3>Workout Plan</h3>
          <p>{suggestedWorkout.description}</p>
          <h4>Workout Routine:</h4>
          <ul>
            {suggestedWorkout.workout.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
          <h4>Diet Tips:</h4>
          <p>{suggestedWorkout.dietTips}</p>
          <h4>Lifestyle Tips:</h4>
          <p>{suggestedWorkout.lifestyleTips}</p>
        </div>
      )}
    </div>
  );
};

export default Workout;