const app = {
    init: () => {
        console.log("Groundwork Initiative: Online");
        app.animateStats();
    },

    animateStats: () => {
        const statElement = document.getElementById('pink-tax-stat');
        if (statElement) {
            let count = 0;
            const target = 13;
            const interval = setInterval(() => {
                if (count >= target) {
                    clearInterval(interval);
                    statElement.innerText = `Confirmed: Disrupting the ${target}% Pink Tax Premium`;
                } else {
                    count++;
                    statElement.innerText = `Analyzing Market Inequities: ${count}%`;
                }
            }, 50);
        }
    },

    showEngineering: () => {
        alert("Loading Applied Lab Blueprints: Solar Voltaic Cell Design v1.0.4");
    }
};

window.onload = app.init;
