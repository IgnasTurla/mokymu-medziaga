const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(event, tabName) {
    // Pašalinti "active-link" iš visų tab'ų
    for (const tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    // Pašalinti "active-tab" iš visų turinio elementų
    for (const tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    
    // Pridėti "active-link" į paspaustą tab'ą
    event.currentTarget.classList.add("active-link");

    // Rodyti atitinkamą tab turinį
    document.getElementById(tabName).classList.add("active-tab");
}


