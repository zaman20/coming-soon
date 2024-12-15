
        const targetDate = new Date("2024-12-20T00:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days.toString().padStart(2, "0");
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                document.querySelector(".heading").textContent = "We're Live!";
                document.querySelector(".subheading").textContent = "Thank you for waiting!";
                document.getElementById("countdown").style.display = "none";
            }
        }

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();