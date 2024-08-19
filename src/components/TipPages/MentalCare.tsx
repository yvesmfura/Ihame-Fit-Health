import { useState } from 'react';
import './Tippages_Styles/MentalHealthCare.css';

interface Disorder {
  name: string;
  details: string;
}

interface Category {
  title: string;
  description: string;
  disorders: Disorder[];
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const categories = [
  {
    title: 'Anxiety Disorders',
    description: 'Anxiety disorders involve excessive fear or anxiety.',
    disorders: [
      {
        name: 'Generalized Anxiety Disorder (GAD)',
        details: `
          <strong>Signs and Symptoms:</strong> Excessive worry, restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and sleep disturbances.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, personality, and life events.
          <br/>
          <strong>Treatment:</strong> Cognitive-behavioral therapy (CBT), medication (antidepressants, benzodiazepines), and lifestyle changes like stress management techniques.
        `
      },
      {
        name: 'Panic Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Recurrent unexpected panic attacks, intense fear, heart palpitations, sweating, trembling, shortness of breath, and feelings of impending doom.
          <br/>
          <strong>Causes:</strong> Genetics, stress, and changes in brain function.
          <br/>
          <strong>Treatment:</strong> CBT, medications (antidepressants, benzodiazepines), and exposure therapy.
        `
      },
      {
        name: 'Social Anxiety Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Intense fear of social situations, fear of embarrassment, avoidance of social interactions, sweating, trembling, and nausea.
          <br/>
          <strong>Causes:</strong> Genetics, brain structure, and environmental factors.
          <br/>
          <strong>Treatment:</strong> CBT, medications (antidepressants, beta-blockers), and social skills training.
        `
      },
      {
        name: 'Specific Phobias',
        details: `
          <strong>Signs and Symptoms:</strong> Intense, irrational fear of specific objects or situations, avoidance behavior, and anxiety symptoms when exposed to the phobia.
          <br/>
          <strong>Causes:</strong> Traumatic experiences, genetics, and learned behaviors.
          <br/>
          <strong>Treatment:</strong> Exposure therapy, CBT, and relaxation techniques.
        `
      },
    ]
  },
  {
    title: 'Mood Disorders',
    description: 'Mood disorders cause persistent changes in mood, often involving either depression or elation.',
    disorders: [
      {
        name: 'Major Depressive Disorder (MDD)',
        details: `
          <strong>Signs and Symptoms:</strong> Persistent sadness, loss of interest in activities, changes in appetite, sleep disturbances, fatigue, feelings of worthlessness, and thoughts of death or suicide.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, life events, and personality.
          <br/>
          <strong>Treatment:</strong> Antidepressants, psychotherapy, lifestyle changes, and, in some cases, electroconvulsive therapy (ECT).
        `
      },
      {
        name: 'Bipolar Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Mood swings that include emotional highs (mania or hypomania) and lows (depression).
          <br/>
          <strong>Causes:</strong> Genetics, brain structure and function, and environmental factors.
          <br/>
          <strong>Treatment:</strong> Mood stabilizers, antipsychotic medications, psychotherapy, and lifestyle management.
        `
      },
      {
        name: 'Persistent Depressive Disorder (Dysthymia)',
        details: `
          <strong>Signs and Symptoms:</strong> Chronic low mood, feelings of hopelessness, low self-esteem, poor appetite, and sleep disturbances.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, and stressful life events.
          <br/>
          <strong>Treatment:</strong> Antidepressants, psychotherapy, and lifestyle changes.
        `
      },
    ]
  },
  {
    title: 'Obsessive-Compulsive and Related Disorders',
    description: 'Disorders characterized by obsessive thoughts and/or repetitive behaviors.',
    disorders: [
      {
        name: 'Obsessive-Compulsive Disorder (OCD)',
        details: `
          <strong>Signs and Symptoms:</strong> Recurrent, unwanted thoughts (obsessions) and/or repetitive behaviors (compulsions).
          <br/>
          <strong>Causes:</strong> Genetics, brain abnormalities, and environmental factors.
          <br/>
          <strong>Treatment:</strong> CBT, specifically exposure and response prevention (ERP), and medications like SSRIs.
        `
      },
      {
        name: 'Body Dysmorphic Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Preoccupation with perceived flaws in physical appearance, which are often unnoticeable to others, and repetitive behaviors like mirror checking.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, and societal pressure.
          <br/>
          <strong>Treatment:</strong> CBT, SSRIs, and sometimes antipsychotic medications.
        `
      },
      {
        name: 'Trichotillomania (Hair-Pulling Disorder)',
        details: `
          <strong>Signs and Symptoms:</strong> Recurrent, irresistible urges to pull out hair from the scalp, eyebrows, or other areas, resulting in hair loss.
          <br/>
          <strong>Causes:</strong> Genetics, stress, and other mental health conditions.
          <br/>
          <strong>Treatment:</strong> CBT, habit reversal training, and sometimes medications.
        `
      },
    ]
  },
  {
    title: 'Trauma- and Stressor-Related Disorders',
    description: 'Disorders triggered by traumatic or stressful events.',
    disorders: [
      {
        name: 'Post-Traumatic Stress Disorder (PTSD)',
        details: `
          <strong>Signs and Symptoms:</strong> Flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the traumatic event.
          <br/>
          <strong>Causes:</strong> Exposure to traumatic events such as warfare, sexual assault, or serious accidents.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, particularly trauma-focused CBT and eye movement desensitization and reprocessing (EMDR), and medications.
        `
      },
      {
        name: 'Acute Stress Disorder (ASD)',
        details: `
          <strong>Signs and Symptoms:</strong> Similar to PTSD but occurs immediately after a traumatic event and lasts for a shorter period.
          <br/>
          <strong>Causes:</strong> Trauma from events like accidents, physical assaults, or natural disasters.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, especially CBT, and short-term use of medications if necessary.
        `
      },
      {
        name: 'Adjustment Disorders',
        details: `
          <strong>Signs and Symptoms:</strong> Emotional or behavioral symptoms in response to a stressful event, such as job loss, divorce, or a natural disaster.
          <br/>
          <strong>Causes:</strong> Life stressors that exceed an individual's coping capacity.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, support groups, and medications to alleviate symptoms.
        `
      },
    ]
  },
  {
    title: 'Eating Disorders',
    description: 'Serious conditions related to persistent eating behaviors that negatively impact health.',
    disorders: [
      {
        name: 'Anorexia Nervosa',
        details: `
          <strong>Signs and Symptoms:</strong> Extreme thinness, intense fear of gaining weight, distorted body image, and severe restriction of food intake.
          <br/>
          <strong>Causes:</strong> Genetics, societal pressure, and psychological factors.
          <br/>
          <strong>Treatment:</strong> Nutritional counseling, psychotherapy, and sometimes hospitalization.
        `
      },
      {
        name: 'Bulimia Nervosa',
        details: `
          <strong>Signs and Symptoms:</strong> Episodes of binge eating followed by purging (vomiting, laxative use), excessive exercise, or fasting.
          <br/>
          <strong>Causes:</strong> Genetics, societal pressure, and emotional stress.
          <br/>
          <strong>Treatment:</strong> CBT, nutritional counseling, and medications like antidepressants.
        `
      },
      {
        name: 'Binge-Eating Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Frequent episodes of eating large quantities of food, often rapidly and to the point of discomfort, without purging behaviors.
          <br/>
          <strong>Causes:</strong> Genetics, psychological issues, and dieting history.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, especially CBT, and medications.
        `
      },
    ]
  },
  {
    title: 'Personality Disorders',
    description: 'Enduring patterns of behavior, cognition, and inner experience that deviate markedly from societal expectations.',
    disorders: [
      {
        name: 'Borderline Personality Disorder (BPD)',
        details: `
          <strong>Signs and Symptoms:</strong> Intense fear of abandonment, unstable relationships, impulsive behavior, self-harm, and mood swings.
          <br/>
          <strong>Causes:</strong> Genetics, brain structure and function, and environmental factors.
          <br/>
          <strong>Treatment:</strong> Dialectical behavior therapy (DBT), psychotherapy, and medications for mood stabilization.
        `
      },
      {
        name: 'Antisocial Personality Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Disregard for others' rights, lack of empathy, deceitfulness, impulsivity, and aggressive behavior.
          <br/>
          <strong>Causes:</strong> Genetics, brain abnormalities, and environmental factors.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, anger management, and sometimes medications for aggression or depression.
        `
      },
      {
        name: 'Narcissistic Personality Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Grandiosity, need for admiration, lack of empathy, and exploitative behavior in relationships.
          <br/>
          <strong>Causes:</strong> Genetics, upbringing, and environmental factors.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, especially CBT and DBT, and sometimes medications for co-occurring conditions.
        `
      },
    ]
  },
  {
    title: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    description: 'Disorders characterized by delusions, hallucinations, disorganized thinking, and impaired functioning.',
    disorders: [
      {
        name: 'Schizophrenia',
        details: `
          <strong>Signs and Symptoms:</strong> Delusions, hallucinations, disorganized speech, social withdrawal, and impaired functioning.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, and environmental factors.
          <br/>
          <strong>Treatment:</strong> Antipsychotic medications, psychotherapy, and social support.
        `
      },
      {
        name: 'Schizoaffective Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Symptoms of schizophrenia combined with mood disorder symptoms (depression or mania).
          <br/>
          <strong>Causes:</strong> Genetics, brain structure abnormalities, and life stressors.
          <br/>
          <strong>Treatment:</strong> Antipsychotic medications, mood stabilizers, psychotherapy, and lifestyle management.
        `
      },
      {
        name: 'Brief Psychotic Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Sudden onset of psychotic symptoms, such as delusions, hallucinations, or disorganized speech, lasting less than a month.
          <br/>
          <strong>Causes:</strong> Severe stress, trauma, or other mental health disorders.
          <br/>
          <strong>Treatment:</strong> Antipsychotic medications, psychotherapy, and monitoring for recurrence.
        `
      },
    ]
  },
  {
    title: 'Substance-Related and Addictive Disorders',
    description: 'Disorders involving the misuse of drugs, alcohol, or other addictive behaviors.',
    disorders: [
      {
        name: 'Alcohol Use Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Craving alcohol, inability to control drinking, withdrawal symptoms, and neglect of responsibilities.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, and environmental factors like peer pressure.
          <br/>
          <strong>Treatment:</strong> Detoxification, medications, psychotherapy, and support groups like Alcoholics Anonymous (AA).
        `
      },
      {
        name: 'Opioid Use Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Craving opioids, inability to control use, withdrawal symptoms, and neglect of responsibilities.
          <br/>
          <strong>Causes:</strong> Prescription misuse, genetic factors, and environmental influences.
          <br/>
          <strong>Treatment:</strong> Medications (methadone, buprenorphine), psychotherapy, and support groups.
        `
      },
      {
        name: 'Gambling Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Persistent and problematic gambling behavior, lying about gambling, and jeopardizing relationships or career opportunities.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, and environmental factors like exposure to gambling.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, cognitive-behavioral therapy, and support groups like Gamblers Anonymous (GA).
        `
      },
    ]
  },
  {
    title: 'Neurocognitive Disorders',
    description: 'Disorders characterized by a decline in cognitive functioning, such as memory, attention, or language.',
    disorders: [
      {
        name: 'Alzheimer\'s Disease',
        details: `
          <strong>Signs and Symptoms:</strong> Memory loss, confusion, difficulty with language and problem-solving, and changes in behavior.
          <br/>
          <strong>Causes:</strong> Genetics, age, and brain changes like amyloid plaques and neurofibrillary tangles.
          <br/>
          <strong>Treatment:</strong> Medications to manage symptoms, cognitive therapy, and support for caregivers.
        `
      },
      {
        name: 'Vascular Dementia',
        details: `
          <strong>Signs and Symptoms:</strong> Problems with reasoning, planning, judgment, memory, and other thought processes caused by brain damage from impaired blood flow.
          <br/>
          <strong>Causes:</strong> Stroke, atherosclerosis, and other conditions that affect blood vessels.
          <br/>
          <strong>Treatment:</strong> Managing underlying cardiovascular conditions, cognitive therapy, and medications for symptom management.
        `
      },
      {
        name: 'Lewy Body Dementia',
        details: `
          <strong>Signs and Symptoms:</strong> Visual hallucinations, cognitive fluctuations, sleep disturbances, and movement difficulties.
          <br/>
          <strong>Causes:</strong> Abnormal deposits of a protein called alpha-synuclein in the brain.
          <br/>
          <strong>Treatment:</strong> Medications to manage symptoms, cognitive therapy, and support for caregivers.
        `
      },
    ]
  },
  {
    title: 'Sleep-Wake Disorders',
    description: 'Disorders that affect the ability to sleep well on a regular basis.',
    disorders: [
      {
        name: 'Insomnia Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Difficulty falling asleep, staying asleep, or waking up too early, leading to daytime impairment.
          <br/>
          <strong>Causes:</strong> Stress, anxiety, depression, poor sleep habits, and medical conditions.
          <br/>
          <strong>Treatment:</strong> CBT for insomnia (CBT-I), sleep hygiene education, and sometimes medications.
        `
      },
      {
        name: 'Narcolepsy',
        details: `
          <strong>Signs and Symptoms:</strong> Excessive daytime sleepiness, sudden loss of muscle tone (cataplexy), sleep paralysis, and hallucinations.
          <br/>
          <strong>Causes:</strong> Loss of hypocretin-producing neurons in the brain, genetic factors, and autoimmune processes.
          <br/>
          <strong>Treatment:</strong> Stimulant medications, antidepressants for cataplexy, and lifestyle adjustments.
        `
      },
      {
        name: 'Obstructive Sleep Apnea',
        details: `
          <strong>Signs and Symptoms:</strong> Repeated episodes of partial or complete obstruction of the upper airway during sleep, leading to breathing pauses and frequent awakenings.
          <br/>
          <strong>Causes:</strong> Obesity, physical abnormalities, and aging.
          <br/>
          <strong>Treatment:</strong> Continuous positive airway pressure (CPAP) therapy, weight loss, and in some cases, surgery.
        `
      },
    ]
  },

  {
    title: 'Impulse-Control Disorders',
    description: 'Disorders characterized by impulsive behaviors that are harmful to oneself or others.',
    disorders: [
      {
        name: 'Intermittent Explosive Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Sudden, unwarranted anger outbursts, aggression, and destructive behavior.
          <br/>
          <strong>Causes:</strong> Genetics, brain structure, and early life experiences.
          <br/>
          <strong>Treatment:</strong> CBT, anger management therapy, and medications like mood stabilizers.
        `
      },
      {
        name: 'Kleptomania',
        details: `
          <strong>Signs and Symptoms:</strong> Recurrent inability to resist urges to steal items that are not needed for personal use or monetary value.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, and co-occurring mental health disorders.
          <br/>
          <strong>Treatment:</strong> CBT, medications like SSRIs, and sometimes family therapy.
        `
      },
      {
        name: 'Pyromania',
        details: `
          <strong>Signs and Symptoms:</strong> Recurrent, deliberate fire-setting, fascination with fire, and feelings of pleasure or relief when setting or witnessing fires.
          <br/>
          <strong>Causes:</strong> Genetics, brain chemistry, and environmental factors.
          <br/>
          <strong>Treatment:</strong> CBT, psychotherapy, and sometimes medications.
        `
      },
    ]
  },
  {
    title: 'Dissociative Disorders',
    description: 'Dissociative disorders involve disruptions or breakdowns of memory, awareness, identity, or perception.',
    disorders: [
      {
        name: 'Dissociative Identity Disorder (DID)',
        details: `
          <strong>Signs and Symptoms:</strong> Presence of two or more distinct identities or personality states, gaps in memory, and significant distress or impairment.
          <br/>
          <strong>Causes:</strong> Severe trauma during early childhood, such as extreme, repetitive physical, sexual, or emotional abuse.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, including cognitive-behavioral therapy (CBT) and trauma-focused therapy, and sometimes medications for co-occurring symptoms.
        `
      },
      {
        name: 'Dissociative Amnesia',
        details: `
          <strong>Signs and Symptoms:</strong> Inability to recall important personal information, usually related to a traumatic or stressful event, beyond ordinary forgetfulness.
          <br/>
          <strong>Causes:</strong> Trauma, extreme stress, and psychological factors.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, supportive care, and sometimes medications for associated conditions like depression or anxiety.
        `
      },
      {
        name: 'Depersonalization/Derealization Disorder',
        details: `
          <strong>Signs and Symptoms:</strong> Persistent or recurring feelings of detachment from one's body or mind (depersonalization) and/or a sense of unreality about the environment (derealization).
          <br/>
          <strong>Causes:</strong> Severe stress, trauma, or other mental health conditions.
          <br/>
          <strong>Treatment:</strong> Psychotherapy, particularly CBT, and sometimes medications for co-occurring symptoms.
        `
      },
    ]
  },
];

const MentalHealthCarePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedDisorder, setSelectedDisorder] = useState<Disorder | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedDisorder(null);
    scrollToTop();
  };

  const handleDisorderClick = (disorder: Disorder) => {
    setSelectedDisorder(disorder);
    scrollToTop();
  };

  const handleBackClick = () => {
    setSelectedDisorder(null);
    scrollToTop();
  };

  return (
    <div className="mhc-container">
      {selectedCategory ? (
        selectedDisorder ? (
          <div className="mhc-disorder-details">
            <h2>{selectedDisorder.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: selectedDisorder.details }} />
            <button onClick={handleBackClick}>Back to Disorders</button>
          </div>
        ) : (
          <div className="mhc-category-details">
            <h2>{selectedCategory.title}</h2>
            <p>{selectedCategory.description}</p>
            <ul>
              {selectedCategory.disorders.map((disorder) => (
                <li key={disorder.name} onClick={() => handleDisorderClick(disorder)}>
                  {disorder.name}
                </li>
              ))}
            </ul>
            <button onClick={() => setSelectedCategory(null)}>Back to Categories</button>
          </div>
        )
      ) : (
        <div className="mhc-categories-list">
        <div className="mental-health-awareness">
              <h2>Mental Health Awareness</h2>
              <p>Mental health is a critical aspect of overall well-being, affecting how we think, feel, and act. It influences our ability to handle stress, relate to others, and make choices.</p>
              <p>Here are some important statistics:</p>
              <ul>
                <li>One in five adults experiences a mental health disorder in a given year.</li>
                <li>50% of all lifetime mental illness begins by age 14, and 75% by age 24.</li>
                <li>Mental health disorders are the leading cause of disability worldwide.</li>
                <li>Depression is the leading cause of disability in the world, affecting more than 264 million people.</li>
              </ul>
              <p>It's important to understand the different types of mental health disorders and how they can affect individuals. Click on a category below to learn more about the associated disorders.</p>
              <p>Click on a category to learn more about the associated disorders.</p>
          </div>

          <div className="mhc-cards">
            {categories.map((category) => (
              <div className="mhc-card" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <button onClick={() => handleCategoryClick(category)}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalHealthCarePage;
