
    const onetimeDonation = document.getElementById("one-timer");
    const monthlyDonation = document.getElementById("monthly");

if (onetimeDonation && monthlyDonation) {
        onetimeDonation.addEventListener('click', () => {
          donationPage("one-timer");
        });
    
        monthlyDonation.addEventListener('click', () => {
          donationPage("monthly");
        });
    }


export function donationPage(selectedDonationType)
{
    document.getElementById("one-timer").classList.remove("donation-select");
    document.getElementById("monthly").classList.remove("donation-select");

    // Add the 'donation-select' class to the selected option
    if (selectedDonationType === "one-timer") {
        document.getElementById("one-timer").classList.add("donation-select");
    } else if (selectedDonationType === "monthly") {
        document.getElementById("monthly").classList.add("donation-select");
    }
}