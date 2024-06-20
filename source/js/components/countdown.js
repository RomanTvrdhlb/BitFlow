document.addEventListener('DOMContentLoaded', () => {
    function countdown(targetDate) {
        const countdownElement = {
            weeks: document.getElementById('custom-weeks'),
            days: document.getElementById('custom-days'),
            hours: document.getElementById('custom-hours'),
            minutes: document.getElementById('custom-minutes')
        };

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElement.weeks.textContent = 0;
                countdownElement.days.textContent = 0;
                countdownElement.hours.textContent = 0;
                countdownElement.minutes.textContent = 0;
                clearInterval(interval);
                return;
            }

            const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
            const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            countdownElement.weeks.textContent = weeks;
            countdownElement.days.textContent = days;
            countdownElement.hours.textContent = hours;
            countdownElement.minutes.textContent = minutes;
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    const countdownContainer = document.querySelector('.custom-countdown');
    if (countdownContainer) {
        const targetDate = new Date(countdownContainer.getAttribute('data-date')).getTime();
        countdown(targetDate);
    }
});
