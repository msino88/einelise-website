export default function Home() {
    return (
        <div className="home-container">
            <div className="panel bio">
            <h1> Welcome to Einelise's Page!</h1>
            <p>Hello, welcome to Einelise's Webpage. Here you will find all things Einelise-related, including her Bio, stats, and more!</p>
            </div>

            <div className="panel-stats">
                <h2>Stats:</h2>
                <p>As of 3/24/2025, Einelise's stats are:</p>
                <ul>
                    <li><strong>Breed</strong>: Pembroke Welsh Corgi</li>
                    <li><strong>Birthday</strong>: November 6th, 2024</li>
                    <li><strong>Weight</strong>: ~11 lbs</li>
                    <li><strong>Age</strong>: 18 weeks old</li>
                    <li><strong>Favorite Treat</strong>: Chicken</li>
                    <li><strong>Cuteness</strong>: 100/10</li>
                </ul>

            </div>
            <div className="panel-tricks">
                <h2>Tricks:</h2>
                <p>Knows the following tricks:</p>
                <ul>
                    <li><strong>Sit</strong> - Einelise sits!</li>
                    <li><strong>Down</strong> - Einelise goes into a down (we're trying to eventually teach her to sploot)</li>
                    <li><strong>Up</strong> - Einelise will get on her hind legs and stand up, jumping all the while!</li>
                    <li><strong>Crate</strong> - She knows how to enter her crate on command</li>
                    <li><strong>Left/Right Paw</strong> - Einelise will put her Left/Right paw out depending on which one you ask for (50/50) chance</li>
                    <li><strong>Left/Right Twirl</strong> - Einelise will do a Left/Right twirl dependng on which one you ask for. So far, she needs visual assistance to figure out which way to twirl.</li>
                    <li><strong>Stand</strong> - Einelise stands from a down/sit position</li>
                    <li><strong>Give me a kiss!</strong> - Einelise will bump her snoot in your general facial area, mimicking a kiss!</li>
                    <li><strong>Cuddles</strong> - Einelise will crawl into your lap and cuddle with you</li>
                </ul>
            </div>
        </div>
    );
}