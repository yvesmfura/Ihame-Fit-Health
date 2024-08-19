import React, { useState, useRef } from 'react';
import './Tippages_Styles/BodyCare.css';


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const BodyCare: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: 'Heart Care',
      content: `
        Heart care involves maintaining the health of your heart to prevent cardiovascular diseases such as heart attacks, strokes, and hypertension. Your heart is the engine of your body, and its health is crucial for overall well-being.
    
        <h3>Signs and Symptoms of Heart Problems:</h3>
        <ul>
          <li>Chest pain or discomfort</li>
          <li>Shortness of breath</li>
          <li>Pain, numbness, or coldness in your legs or arms</li>
          <li>Irregular heartbeat (arrhythmia)</li>
          <li>Fatigue</li>
          <li>Swelling in your feet, ankles, or legs</li>
          <li>Dizziness or fainting</li>
        </ul>
    
        <h3>Treatment:</h3>
        <ul>
          <li><strong>Lifestyle changes:</strong> Adopting a heart-healthy lifestyle is the first step. This includes regular exercise, a balanced diet, quitting smoking, and managing stress.</li>
          <li><strong>Medications:</strong> Depending on your condition, your doctor may prescribe medications to manage blood pressure, cholesterol, or blood clots.</li>
          <li><strong>Surgical procedures:</strong> In severe cases, procedures such as angioplasty, bypass surgery, or the implantation of a pacemaker may be necessary.</li>
          <li><strong>Cardiac rehabilitation:</strong> A structured program that helps improve your heart health after a heart attack or surgery.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Maintaining heart health is essential for preventing heart disease. A heart-healthy lifestyle includes:
        <ul>
          <li><strong>Regular exercise:</strong> Engage in at least 150 minutes of moderate-intensity aerobic activity, such as brisk walking, per week.</li>
          <li><strong>Balanced diet:</strong> Focus on a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats like those found in olive oil and avocados.</li>
          <li><strong>Avoid smoking:</strong> Smoking is a major risk factor for heart disease. Quitting smoking can drastically reduce your risk.</li>
          <li><strong>Monitor health indicators:</strong> Regularly check your blood pressure, cholesterol levels, and blood sugar. Keeping these in check helps prevent heart disease.</li>
          <li><strong>Stress management:</strong> Chronic stress can negatively impact heart health. Incorporate stress-reducing activities like yoga, meditation, or hobbies.</li>
        </ul>
      `,
      videoUrl: "https://www.youtube.com/embed/ngI1qKg9qgE?si=HgM4BVuV3w4NkZh_"
    },
    
    {
      title: 'Cancer Prevention',
      content: `
        Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells. If the spread is not controlled, it can result in death. Cancer prevention involves adopting a healthy lifestyle and being proactive about your health.
    
        <h3>Signs and Symptoms of Cancer:</h3>
        <ul>
          <li>Unexplained weight loss</li>
          <li>Persistent fatigue</li>
          <li>Changes in skin appearance, such as new moles or sores that don't heal</li>
          <li>Persistent cough or trouble breathing</li>
          <li>Unusual bleeding or discharge</li>
          <li>Thickening or lump in the breast or other parts of the body</li>
          <li>Changes in bowel or bladder habits</li>
          <li>Difficulty swallowing</li>
        </ul>
    
        <h3>Treatment:</h3>
        <ul>
          <li><strong>Surgery:</strong> The removal of cancerous tissue is often the first line of treatment.</li>
          <li><strong>Chemotherapy:</strong> The use of drugs to kill cancer cells or stop their growth.</li>
          <li><strong>Radiation therapy:</strong> The use of high-energy rays to target and kill cancer cells.</li>
          <li><strong>Immunotherapy:</strong> Treatments that help your immune system fight cancer.</li>
          <li><strong>Targeted therapy:</strong> Drugs that target specific molecules involved in cancer growth.</li>
          <li><strong>Hormone therapy:</strong> Treatment that stops or slows the growth of cancers that use hormones to grow, such as some breast and prostate cancers.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Cancer prevention starts with making healthy lifestyle choices and staying informed about your health. Key strategies include:
        <ul>
          <li><strong>Avoid tobacco:</strong> Smoking and tobacco use are major causes of cancer. Quitting reduces your risk significantly.</li>
          <li><strong>Healthy diet:</strong> Eat plenty of fruits, vegetables, and whole grains. Limit red meat and processed foods.</li>
          <li><strong>Limit alcohol consumption:</strong> Drinking alcohol increases the risk of several types of cancer. If you drink, do so in moderation.</li>
          <li><strong>Sun protection:</strong> Protect your skin from harmful UV rays by using sunscreen, wearing protective clothing, and avoiding tanning beds.</li>
          <li><strong>Regular screenings:</strong> Early detection can make a significant difference. Follow recommended screening guidelines for breast, cervical, prostate, and colon cancers.</li>
        </ul>
      `,
      videoUrl: 'https://www.youtube.com/embed/Nrye-hfzGIk?si=HoyRDK7OH8spB_s7'
    },

    {
      title: 'Diabetes Prevention',
      content: `
        Diabetes is a chronic condition that affects how your body turns food into energy. The most common types are type 1, type 2, and gestational diabetes. Prevention, particularly of type 2 diabetes, involves maintaining a healthy and active lifestyle.
    
        <h3>Signs and Symptoms of Diabetes:</h3>
        <ul>
          <li>Increased thirst and frequent urination</li>
          <li>Extreme hunger</li>
          <li>Unexplained weight loss</li>
          <li>Fatigue</li>
          <li>Blurred vision</li>
          <li>Slow-healing sores</li>
          <li>Frequent infections, such as gums or skin infections</li>
          <li>Numbness or tingling in the hands or feet</li>
        </ul>
    
        <h3>Treatment:</h3>
        <ul>
          <li><strong>Lifestyle management:</strong> Healthy eating and regular physical activity are essential to managing diabetes. Weight loss can also help control blood sugar levels.</li>
          <li><strong>Medications:</strong> Depending on the type of diabetes, medications such as insulin or oral drugs may be prescribed to help manage blood sugar levels.</li>
          <li><strong>Blood sugar monitoring:</strong> Regularly checking your blood sugar levels helps you manage your diabetes more effectively.</li>
          <li><strong>Insulin therapy:</strong> For those with type 1 diabetes, and sometimes type 2, insulin therapy is necessary to regulate blood sugar.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Preventing diabetes is about maintaining a healthy and active lifestyle. Important steps include:
        <ul>
          <li><strong>Healthy eating:</strong> Focus on whole foods, such as vegetables, fruits, lean proteins, and whole grains. Reduce your intake of sugar and refined carbs.</li>
          <li><strong>Regular exercise:</strong> Aim for at least 30 minutes of moderate physical activity most days of the week. Walking, cycling, and swimming are excellent options.</li>
          <li><strong>Maintain a healthy weight:</strong> Excess body fat, particularly around the abdomen, increases the risk of type 2 diabetes. Achieve and maintain a healthy weight through diet and exercise.</li>
          <li><strong>Regular health checks:</strong> Monitor your blood sugar levels, especially if you have a family history of diabetes. Early detection can prevent the onset of the disease.</li>
        </ul>
      `,
      videoUrl: 'https://www.youtube.com/embed/1DUPRcjqWOk?si=NJfN3BJRYqd4XP3P'
    },
    
    {
      title: 'Infertility Prevention',
      content: `
        Infertility is a condition where a person is unable to conceive after one year of regular, unprotected intercourse. It can affect both men and women and may be due to various factors. Preventing infertility involves proactive health management and awareness of reproductive health.
    
        <h3>Signs and Symptoms of Infertility:</h3>
        <ul>
          <li>Irregular or absent menstrual cycles</li>
          <li>Painful or heavy periods</li>
          <li>Hormonal imbalances, such as changes in skin, hair, or weight</li>
          <li>Pain during intercourse</li>
          <li>Recurrent miscarriages</li>
          <li>Low sperm count or motility in men</li>
          <li>Difficulty maintaining an erection or ejaculation issues in men</li>
        </ul>
    
        <h3>Treatment:</h3>
        <ul>
          <li><strong>Medical evaluation:</strong> Both partners should undergo a thorough medical examination to identify the cause of infertility.</li>
          <li><strong>Medications:</strong> Fertility drugs may be prescribed to stimulate ovulation or improve sperm count.</li>
          <li><strong>Assisted reproductive technologies (ART):</strong> Procedures like in vitro fertilization (IVF) or intrauterine insemination (IUI) may be recommended.</li>
          <li><strong>Surgical interventions:</strong> Surgery may be required to correct structural issues in the reproductive organs.</li>
          <li><strong>Lifestyle changes:</strong> Adopting a healthy lifestyle, including maintaining a healthy weight, reducing alcohol intake, and quitting smoking, can improve fertility.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Infertility can be prevented through proactive health management. Key factors include:
        <ul>
          <li><strong>Maintain a healthy weight:</strong> Both underweight and overweight conditions can affect fertility. Aim for a balanced diet and regular exercise to maintain an optimal weight.</li>
          <li><strong>Avoid sexually transmitted infections (STIs):</strong> STIs such as chlamydia and gonorrhea can cause infertility. Practice safe sex and get regular screenings.</li>
          <li><strong>Manage stress:</strong> High levels of stress can affect reproductive health. Engage in stress-relief practices like meditation, yoga, and adequate sleep.</li>
          <li><strong>Early medical intervention:</strong> If you experience irregular menstrual cycles or other reproductive health issues, seek medical advice early to address potential problems.</li>
        </ul>
      `,
      videoUrl: 'https://www.youtube.com/embed/UTZKFfEdv20?si=7V9-mMSpdPMgZmYU'
    },
    
    {
      title: 'Hepatitis Prevention',
      content: `
        Hepatitis is an inflammation of the liver, often caused by viral infections, but it can also result from alcohol use, toxins, certain medications, and autoimmune diseases. There are several types of hepatitis viruses, including A, B, C, D, and E.
    
        <h3>Signs and Symptoms:</h3>
        <ul>
          <li>Fatigue</li>
          <li>Jaundice (yellowing of the skin and eyes)</li>
          <li>Abdominal pain and swelling</li>
          <li>Nausea and vomiting</li>
          <li>Dark urine</li>
          <li>Loss of appetite</li>
          <li>Fever</li>
          <li>Joint pain</li>
        </ul>
    
        <h3>Treatment:</h3>
        <ul>
          <li><strong>Hepatitis A and E:</strong> Often resolve on their own with supportive care, such as rest, hydration, and a healthy diet.</li>
          <li><strong>Hepatitis B and C:</strong> May require antiviral medications to prevent chronic infection and liver damage.</li>
          <li><strong>Hepatitis D:</strong> Requires treatment with interferon injections and management of Hepatitis B co-infection.</li>
          <li><strong>Chronic Hepatitis:</strong> May require long-term treatment to prevent liver cirrhosis or cancer.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Preventing hepatitis involves safeguarding yourself from infection and maintaining a healthy lifestyle:
        <ul>
          <li><strong>Vaccination:</strong> Vaccines are available for Hepatitis A and B. Ensure you and your family are vaccinated.</li>
          <li><strong>Safe practices:</strong> Avoid sharing needles, and ensure that tattooing and piercing are done with sterile equipment.</li>
          <li><strong>Safe sex:</strong> Use condoms to reduce the risk of Hepatitis B and C, which can be transmitted through sexual contact.</li>
          <li><strong>Safe food and water:</strong> In areas where hepatitis is common, be cautious with food and water consumption. Drink bottled water and eat well-cooked food.</li>
          <li><strong>Regular screenings:</strong> If you are at risk for hepatitis, get regular screenings to detect the infection early.</li>
        </ul>
      `,
      videoUrl: 'https://www.youtube.com/embed/35V6WL3Jam8?si=F773AYRiAL3MSeZC'
    },

    {
      title: 'Sexual Reproductive Health Care',
      content: `
        Sexual and reproductive health care is vital for ensuring physical, emotional, and social well-being related to sexuality and reproduction. It encompasses a range of services and education to support individuals in making informed decisions about their sexual and reproductive health.
    
        <h3>Key Components of Sexual Reproductive Health Care:</h3>
        <ul>
          <li><strong>Regular check-ups:</strong> Routine visits to a healthcare provider for reproductive health check-ups are crucial for early detection of potential issues. These may include Pap smears, pelvic exams, and screenings for sexually transmitted infections (STIs).</li>
          <li><strong>Safe sex practices:</strong> Use contraception and protection, such as condoms, to prevent unwanted pregnancies and sexually transmitted infections. Understanding and practicing safe sex reduces the risk of health complications.</li>
          <li><strong>Understanding contraception:</strong> Educate yourself on different contraceptive methods, such as birth control pills, IUDs, implants, and emergency contraception. Choose the one that best fits your lifestyle and needs, in consultation with a healthcare provider.</li>
          <li><strong>Fertility awareness:</strong> Understanding your menstrual cycle and fertility signs can aid in family planning or identifying potential reproductive health issues.</li>
          <li><strong>Emotional support:</strong> Addressing emotional and psychological well-being is also a key component of sexual and reproductive health. This includes managing stress, dealing with relationship issues, and seeking counseling if needed.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Maintaining sexual reproductive health involves proactive measures:
        <ul>
          <li><strong>Regular screenings:</strong> Regular screenings for STIs, cervical cancer, and other reproductive health issues can lead to early detection and treatment.</li>
          <li><strong>Vaccinations:</strong> Vaccines like the HPV vaccine can prevent certain types of cancer and STIs.</li>
          <li><strong>Healthy relationships:</strong> Foster healthy and respectful relationships where communication and consent are prioritized.</li>
          <li><strong>Education:</strong> Stay informed about sexual health, contraception, and reproductive rights to make empowered decisions.</li>
          <li><strong>Consultation:</strong> Regular consultation with a healthcare provider helps in making informed decisions about sexual and reproductive health.</li>
        </ul>
      `,
      videoUrl: 'https://www.youtube.com/embed/qz8AAwBrReo?si=U9eREEZJXgFL0zM9'
    },

    {
      title: 'Erectile Dysfunction (ED)',
      content: `
        Erectile Dysfunction (ED) is the inability to achieve or maintain an erection sufficient for satisfactory sexual performance. It can be a sign of physical or psychological conditions and often impacts the emotional well-being of those affected.
    
        <h3>Signs and Symptoms of Erectile Dysfunction:</h3>
        <ul>
          <li>Difficulty getting an erection</li>
          <li>Difficulty maintaining an erection during sexual activities</li>
          <li>Reduced interest in sex</li>
          <li>Anxiety or stress related to sexual performance</li>
          <li>Persistent erection problems</li>
        </ul>
    
        <h3>Treatment:</h3>
        <ul>
          <li><strong>Medications:</strong> Phosphodiesterase type 5 (PDE5) inhibitors like sildenafil (Viagra), tadalafil (Cialis), and vardenafil (Levitra) are commonly prescribed to improve erectile function.</li>
          <li><strong>Psychotherapy:</strong> Counseling or therapy can help address psychological causes of ED, such as stress, anxiety, or depression.</li>
          <li><strong>Lifestyle changes:</strong> Improving diet, exercising regularly, quitting smoking, and reducing alcohol intake can enhance erectile function.</li>
          <li><strong>Vacuum erection devices:</strong> These devices create a vacuum that pulls blood into the penis, helping to achieve an erection.</li>
          <li><strong>Surgical options:</strong> In some cases, penile implants or vascular surgery may be necessary.</li>
          <li><strong>Hormone therapy:</strong> If ED is related to low testosterone levels, hormone replacement therapy may be recommended.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Preventing ED involves maintaining overall health and addressing potential risk factors:
        <ul>
          <li><strong>Maintain a healthy lifestyle:</strong> Regular exercise, a balanced diet, and avoiding tobacco and excessive alcohol can reduce the risk of ED.</li>
          <li><strong>Manage chronic conditions:</strong> Conditions like diabetes, high blood pressure, and heart disease can contribute to ED. Proper management of these conditions is crucial.</li>
          <li><strong>Reduce stress:</strong> Chronic stress and anxiety can lead to ED. Engaging in relaxation techniques such as meditation and mindfulness can help.</li>
          <li><strong>Regular check-ups:</strong> Routine medical exams can detect early signs of conditions that might lead to ED.</li>
          <li><strong>Open communication:</strong> Discussing any sexual health concerns with a healthcare provider can lead to early diagnosis and treatment.</li>
        </ul>
      `,
      videoUrl: "https://www.youtube.com/embed/AwQI8FwngX8?si=AxSfo8QDOD7nXceu"
    },
    
    {
      title: 'Female Sexual Dysfunction (FSD)',
      content: `
        Female Sexual Dysfunction (FSD) refers to persistent problems with sexual response, desire, orgasm, or pain that cause distress or strain in a woman's life. It can affect women of all ages and may have physical, psychological, or relational causes.
    
        <h3>Types of Female Sexual Dysfunction:</h3>
        <ul>
          <li><strong>Low sexual desire:</strong> A persistent lack of interest in sexual activity, also known as hypoactive sexual desire disorder (HSDD).</li>
          <li><strong>Sexual arousal disorder:</strong> Difficulty becoming aroused or maintaining arousal during sexual activity.</li>
          <li><strong>Orgasmic disorder:</strong> Delay in or inability to achieve orgasm despite adequate sexual stimulation.</li>
          <li><strong>Painful intercourse:</strong> Experiencing pain during intercourse, also known as dyspareunia, or discomfort related to pelvic conditions.</li>
        </ul>
    
        <h3>Signs and Symptoms:</h3>
        <ul>
          <li>Reduced or absent sexual desire</li>
          <li>Inability to become aroused or maintain arousal</li>
          <li>Difficulty achieving orgasm</li>
          <li>Pain during sexual activity</li>
          <li>Emotional distress or relationship issues related to sexual activity</li>
        </ul>
    
        <h3>Treatment:</h3>
        Treatment for FSD depends on the underlying cause and may include:
        <ul>
          <li><strong>Counseling or therapy:</strong> Addressing psychological factors such as anxiety, depression, or relationship issues through therapy can improve sexual function.</li>
          <li><strong>Medications:</strong> Certain medications, such as hormone therapy or lubricants, may help alleviate symptoms of FSD.</li>
          <li><strong>Hormone therapy:</strong> Estrogen or testosterone therapy may be recommended if hormonal imbalances are contributing to FSD.</li>
          <li><strong>Lifestyle changes:</strong> Regular exercise, a healthy diet, and stress management can improve overall sexual health.</li>
          <li><strong>Physical therapy:</strong> Pelvic floor therapy can help with issues related to painful intercourse.</li>
          <li><strong>Communication:</strong> Open and honest communication with a partner about sexual needs and concerns can reduce stress and improve sexual satisfaction.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Preventing FSD involves maintaining a healthy lifestyle and addressing potential risk factors:
        <ul>
          <li><strong>Manage stress:</strong> Reducing stress through relaxation techniques such as yoga, meditation, or deep breathing can improve sexual function.</li>
          <li><strong>Maintain a healthy lifestyle:</strong> Regular exercise, a balanced diet, and avoiding smoking and excessive alcohol can positively impact sexual health.</li>
          <li><strong>Open communication:</strong> Regular communication with a partner and a healthcare provider about sexual health can help identify and address issues early.</li>
          <li><strong>Regular check-ups:</strong> Routine visits to a healthcare provider can help detect and treat any underlying health issues that may affect sexual function.</li>
          <li><strong>Education:</strong> Stay informed about sexual health and seek guidance when experiencing any sexual difficulties.</li>
        </ul>
      `,
      videoUrl: "https://www.youtube.com/embed/J03NFx0Nji8?si=wBwcKv_gUwnbKMwf"
    },
    
    {
      title: 'Digestion System Care',
      content: `
        A healthy digestive system is essential for overall well-being, as it ensures the proper breakdown and absorption of nutrients from the foods we eat. Maintaining digestive health involves a combination of good dietary habits, regular physical activity, and stress management.
    
        <h3>Tips for Maintaining Digestive Health:</h3>
        <ul>
          <li><strong>High-fiber diet:</strong> Include plenty of fiber-rich foods like fruits, vegetables, whole grains, and legumes in your diet to support healthy digestion. Fiber helps regulate bowel movements and prevent constipation.</li>
          <li><strong>Stay hydrated:</strong> Drink plenty of water throughout the day to aid digestion and prevent constipation. Water helps dissolve fats and soluble fiber, allowing these substances to pass through the digestive tract more easily.</li>
          <li><strong>Regular physical activity:</strong> Exercise helps keep food moving through your digestive system and reduces the risk of constipation. Activities like walking, cycling, and swimming are particularly beneficial.</li>
          <li><strong>Avoid processed foods:</strong> Minimize the intake of processed and fatty foods, which can be hard on your digestive system. These foods can slow digestion and lead to issues like bloating and discomfort.</li>
          <li><strong>Manage stress:</strong> High stress levels can interfere with digestion, leading to problems like indigestion and irritable bowel syndrome (IBS). Practice stress-relief techniques such as deep breathing, yoga, and meditation to support a healthy digestive system.</li>
          <li><strong>Eat mindfully:</strong> Chew your food thoroughly and eat slowly to give your digestive system time to work efficiently. Mindful eating also helps prevent overeating, which can strain your digestive organs.</li>
        </ul>
    
        <h3>Prevention:</h3>
        Preventing digestive issues involves proactive care:
        <ul>
          <li><strong>Regular meals:</strong> Eating at regular intervals helps keep your digestive system on track and prevents issues like acid reflux.</li>
          <li><strong>Avoid overeating:</strong> Eating large meals can overwhelm the digestive system. Opt for smaller, more frequent meals to ease digestion.</li>
          <li><strong>Probiotics:</strong> Incorporate probiotics, such as yogurt or fermented foods, into your diet to promote a healthy balance of gut bacteria.</li>
          <li><strong>Limit irritants:</strong> Reduce the intake of irritants like caffeine, alcohol, and spicy foods, which can aggravate the digestive tract.</li>
        </ul>
      `,
      videoUrl: "https://www.youtube.com/embed/eNqUAZwhHao?si=JJ4vwZ8cN58_DJX0"
    },
    
    {
      title: 'Paralysis Prevention',
      content: `
        Paralysis is the loss of muscle function in part of your body, which can result from injury, stroke, or other health conditions. Preventing paralysis involves proactive measures to protect your body and manage underlying health issues.
    
        <h3>Steps to Prevent Paralysis:</h3>
        <ul>
          <li><strong>Exercise regularly:</strong> Engaging in regular physical activity helps to strengthen muscles, improve balance, and reduce the risk of falls and injuries that could lead to paralysis. Activities like strength training, balance exercises, and flexibility routines are particularly beneficial.</li>
          <li><strong>Use safety gear:</strong> Always use appropriate safety gear, such as helmets when cycling or skateboarding and seatbelts when driving. This helps prevent head and spinal injuries, which are common causes of paralysis.</li>
          <li><strong>Manage health conditions:</strong> Chronic conditions like high blood pressure, diabetes, and heart disease can increase the risk of strokes, which can lead to paralysis. It's essential to manage these conditions with proper medication, diet, and lifestyle changes to reduce your risk.</li>
          <li><strong>Early intervention:</strong> If you suspect a stroke or experience symptoms like sudden weakness, numbness, or difficulty speaking, seek medical help immediately. Early treatment can prevent long-term damage and reduce the risk of paralysis.</li>
          <li><strong>Avoid risky behaviors:</strong> Avoid behaviors that increase the risk of spinal cord injuries, such as diving into shallow water or participating in extreme sports without proper precautions.</li>
          <li><strong>Stay informed:</strong> Educate yourself about the signs of stroke and other neurological conditions. Early recognition and quick action can be life-saving and help prevent permanent paralysis.</li>
        </ul>
    
        <h3>Prevention Tips:</h3>
        Additional strategies for preventing paralysis include:
        <ul>
          <li><strong>Healthy lifestyle:</strong> Maintain a healthy weight, avoid smoking, and limit alcohol consumption, as these factors can influence your risk of stroke and other conditions leading to paralysis.</li>
          <li><strong>Regular check-ups:</strong> Regular medical check-ups can help detect and manage conditions that may increase your risk of paralysis.</li>
          <li><strong>Education and awareness:</strong> Stay aware of the risks associated with certain activities and take appropriate precautions to protect yourself from injury.</li>
        </ul>
      `,
      videoUrl: "https://www.youtube.com/embed/nymJxw_LULA?si=8yF2EoriO5dd8Cj6"
    },
    
    {
      title: 'Body Grooming Tips for Men',
      content: `
        Body grooming is an essential part of men's hygiene and self-care. Here are some tips to keep you looking and feeling your best:
        <ul>
          <li><strong>Hair care:</strong> Use a good quality shampoo and conditioner suited to your hair type. Regular trims will keep your hairstyle neat and remove split ends.</li>
          <li><strong>Beard maintenance:</strong> Whether you prefer a clean shave or a well-groomed beard, invest in quality shaving tools and products. Trim your beard regularly and use beard oil to keep it soft and hydrated.</li>
          <li><strong>Skin care:</strong> Cleanse your skin daily with a gentle face wash, exfoliate weekly, and apply moisturizer to keep your skin smooth and hydrated.</li>
          <li><strong>Body hair grooming:</strong> Trim or shave body hair according to your preference, using tools designed for the job to avoid irritation or ingrown hairs.</li>
          <li><strong>Oral hygiene:</strong> Brush your teeth twice a day, floss daily, and use mouthwash to maintain fresh breath and healthy gums.</li>
        </ul>
      `,
      videoUrl: "https://www.youtube.com/embed/t6c4UCAqLSU?si=RDq-Hr0NN2IXM-e7"
    },
    {
      title: 'Body Grooming Tips for Women',
      content: `
        Body grooming is an essential part of women's self-care and personal hygiene. Here are some tips to help you feel confident and fresh:
        <ul>
          <li><strong>Hair care:</strong> Regularly wash and condition your hair according to your hair type. Trimming your hair every few months prevents split ends and keeps your hair healthy.</li>
          <li><strong>Skincare:</strong> Develop a skincare routine that includes cleansing, exfoliating, moisturizing, and using sunscreen daily to protect your skin from damage.</li>
          <li><strong>Body hair grooming:</strong> Whether you choose to shave, wax, or leave your body hair natural, use products that suit your skin type to avoid irritation.</li>
          <li><strong>Nail care:</strong> Keep your nails clean and trimmed. Regularly moisturize your hands and cuticles to maintain healthy nails.</li>
          <li><strong>Oral hygiene:</strong> Brush and floss your teeth daily, and use a fluoride mouthwash to prevent cavities and freshen your breath.</li>
        </ul>
      `,
      videoUrl: "https://www.youtube.com/embed/Gs2bS8OWxZ0?si=6fIWdmSCQUflqS_3"
    },
  ];

  const handleClick = (title: string) => {
    setSelectedSection(title);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
  };

  return (
    <div className="tip-page">
      <h2>Body Care Tips</h2>
      <p>Click on a section to learn more about specific aspects of body care:</p>
      <ul className="section-list">
        {sections.map((section, index) => (
          <li key={index} onClick={() => handleClick(section.title)}>
            {section.title}
          </li>
        ))}
      </ul>

      {selectedSection && (
        <div className="section-content" ref={sectionRef}>
          <h3>{selectedSection}</h3>
          <div
            className="section-text"
            dangerouslySetInnerHTML={{
              __html: sections.find(section => section.title === selectedSection)?.content || '',
            }}
          />
          <h4>Watch the video below for more information:</h4>
          <iframe
            width="560"
            height="315"
            src={sections.find(section => section.title === selectedSection)?.videoUrl}
            title={`${selectedSection} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <button
            onClick={() => {
              setSelectedSection(null);
              scrollToTop();
            }}
            className="back-button"
          >
            Back to sections
          </button>
        </div>
      )}
    </div>
  );
};

export default BodyCare;
