import React from 'react';
import './AgilityDrills.css';

const AgilityDrillsWomen: React.FC = () => {
    return (
        <div className="agility-drills-women-container">
            <h2>Agility Drills for Women</h2>
            <p>Agility drills help women of all ages improve balance, coordination, and functional fitness. These drills enhance athletic performance, increase metabolism, and support long-term joint health, making them perfect for women looking to stay active, mobile, and fit.</p>
            
            <section className="agrility-drills-women-importance">
                <h3>Importance of Agility for Women of All Ages</h3>
                <ul>
                    <li><strong>Teens and Young Women:</strong> Agility improves coordination, quickness, and is key to athletic performance.</li>
                    <li><strong>Mid-Age Women:</strong> Helps maintain balance, joint health, and overall fitness as metabolism slows.</li>
                    <li><strong>Older Women:</strong> Maintains mobility, reduces the risk of falls, and improves quality of life.</li>
                </ul>
            </section>

            <section className="agrility-drills-women-workout">
                <h3>30-Minute Agility Workout Plan</h3>
                <ul>
                    <li>5 minutes: Warm-up with light cardio (jumping jacks, jogging in place).</li>
                    <li>5 minutes: Ladder drills (quick feet, side shuffle).</li>
                    <li>5 minutes: Cone drills (figure 8s, zig-zag runs).</li>
                    <li>5 minutes: Tuck jumps and lateral bounds (alternate sides for power and agility).</li>
                    <li>5 minutes: Lateral slides and crossover steps (improve lateral movement).</li>
                    <li>5 minutes: Cool down with stretches targeting the legs, hips, and lower back.</li>
                </ul>
            </section>

            <section className="agrility-drills-women-dos-donts">
                <h3>Do's and Don'ts</h3>
                <ul>
                    <li><strong>Do:</strong> Warm up thoroughly before starting the drills.</li>
                    <li><strong>Do:</strong> Focus on proper form to prevent injury.</li>
                    <li><strong>Do:</strong> Stay hydrated and take breaks when needed.</li>
                    <li><strong>Don't:</strong> Rush through the exercises; prioritize control over speed.</li>
                    <li><strong>Don't:</strong> Push through pain or discomfort—listen to your body.</li>
                </ul>
            </section>

            <section className="agrility-drills-women-health-tips">
                <h3>Health and Lifestyle Tips</h3>
                <ul>
                    <li>Eat a balanced diet rich in protein and whole grains to fuel your workout.</li>
                    <li>Stay hydrated—drink water throughout the day, especially before and after your workout.</li>
                    <li>Get enough sleep (7-9 hours per night) for proper recovery and optimal performance.</li>
                    <li>Incorporate stretching or yoga into your weekly routine for flexibility and injury prevention.</li>
                </ul>
            </section>

            <section className="agrility-drills-women-video">
                <h3>Guidance Video</h3>
                <p>Watch this video to get a visual guide on how to perform agility drills effectively.</p>
                <div className="agrility-drills-women-video-frame">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/j17GtqC13sY?si=agiH3vtQrdCcqZJY"
                        title="Agility Drills for Women" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default AgilityDrillsWomen;