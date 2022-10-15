function selectTab(tab){
    const selectedTab = document.querySelector(".tab.selected");
    selectedTab.classList.remove("selected");

    tab.classList.add("selected");
}

function selectInformation(tab){
    const selectedInformation = document.querySelector(".information.selected");
    selectedInformation.classList.remove("selected");

    const tabInformationElementId = `information_${tab.id}`;
    const informationToBeShown = document.getElementById(tabInformationElementId);

    informationToBeShown.classList.add("selected");
}

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("selected")) {
            return;
        }
        selectTab(tab);
        selectInformation(tab);
    });
});