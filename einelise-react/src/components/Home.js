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
                    <li>Breed: Pembroke Welsh Corgi</li>
                    <li>Weight: 11 lbs</li>
                    <li>Age: 18 weeks old</li>
                    <li>Favorite Treat: Chicken</li>
                    <li>Cuteness: 100/10</li>
                </ul>

            </div>
            <div className="panel-tricks">
                <p>Knows the following tricks:</p>
                <ul>
                    <li>Sit</li>
                    <li>Down</li>
                    <li>Up</li>
                    <li>Crate</li>
                    <li>Left/Right Paw</li>
                    <li>Left/Right Twirl</li>
                    <li>Stand</li>
                    <li>Give me a kiss!</li>
                    <li>Cuddles</li>
                </ul>
            </div>
        </div>
    );
}