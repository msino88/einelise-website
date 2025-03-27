export default function Home() {
    // Birthday calculations
    const birthDate = new Date('2024-11-06');
    const today = new Date();
    const ageInWeeks = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 7));

    // Biography, stats, and favorite things
    const bio = "Hi fren! Welcome to my webpage, designed by my doting parents Michael Wang and Taisia Goncharouk! My parents love to make me do radical tricks, take sploot naps, and eat yummy nomz!"
    const stats = ""
    const favoriteThings = ["my hooman servants", "pink chew toy", "treats!", "walkies", "flirt pole", "zoomies", "baby carrots", "frens"]

    

    return (
        <div className="home-container">
            <div className="panel-bio">
            <h1> Welcome to Einelise's Page!</h1>
            <p>Hello, welcome to Einelise's Webpage. Here you will find all things Einelise-related, including her Bio, stats, and more!</p>
            </div>
            <div className="biography">
                <h2>About Me:</h2>
                <p>{bio}</p>
            </div>
            <div className="panel-stats">
                <h2>Stats:</h2>
                <p></p>
                <ul>
                    <li><strong>Breed</strong>: Pembroke Welsh Corgi</li>
                    <li><strong>Birthday</strong>: November 6th, 2024</li>
                    <li><strong>Weight</strong>: ~11 lbs</li>
                    <li><strong>Age</strong>: {ageInWeeks} weeks old</li>
                    <li><strong>Favorite Treat</strong>: Acana Lamb & Apple Freeze Dried morsels</li>
                    <li><strong>Cuteness</strong>: 100/10</li>
                </ul>

            </div>
            <div className="panel-tricks">
                <h2>Tricks:</h2>
                <p>Knows the following tricks:</p>
                <ul>
                    <li><strong>Sit</strong> - I can sits!</li>
                    <li><strong>Down</strong> - I goes into a down (my hoomans are trying to  teach me to sploot but i'm a seasoned professional)</li>
                    <li><strong>Up</strong> - I stands up on my hind legs, jumping all the while!</li>
                    <li><strong>Crate</strong> - I knows how to enter the crate on command</li>
                    <li><strong>Left/Right Paw</strong> - I put my Left/Right paw out depending on which my hooman asks for, usually a 50/50 chance</li>
                    <li><strong>Left/Right Twirl</strong> i does a fashionable Left/Right twirl depending on what my hoomans ask for. I sometimes needs visual assistance to figure out which way to twirl.</li>
                    <li><strong>Stand</strong> - I stands from a down/sit position</li>
                    <li><strong>Give me a kiss!</strong> - I will bumps my snoot in your general facial area, mimicking a kiss!</li>
                    <li><strong>Cuddles</strong> - I will crawl into your lap and cuddle with you</li>
                </ul>
            </div>
            <div className="favorite-things">
                <h2>Favorite Things: </h2>
                <ul>{favoriteThings.map((thing, index) => (
                    <li key={index}>{thing}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
    <div>
        <p>Hello</p>
    </div>
}