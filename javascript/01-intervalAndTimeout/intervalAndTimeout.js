const getRandomInterval = () => Math.floor(Math.random() * 3000 + 1000);

const runner = {
    count: 0,
    interval: 0,

    startCount() {
        const nextRun = getRandomInterval()
        this.interval = setInterval(() => this.tick(nextRun), nextRun);
    },

    tick(delay) {
        clearInterval(this.interval);
        console.log(`This took ${delay / 1000}s to run.\n`);
        this.count++;

        if (this.count == 3) {
            let clearTimeout = getRandomInterval();
            console.log(`Clearing interval in ${clearTimeout / 1000}s.\nTime before the next run executes: ${delay / 1000}s`)
            setTimeout(() => clearInterval(this.interval), clearTimeout);
            // removed the "return" statement to test if the interval can still run again if the delay is smaller than the timeout interval
        }

        this.startCount();
    }
};

runner.startCount();