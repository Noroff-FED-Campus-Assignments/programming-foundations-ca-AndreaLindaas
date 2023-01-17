const house = {
    doors: 4,
    windows: 12,
    floors: 2,
    houseSizeInSqm: 160,
    rooms: ["bedroom 1", "bedroom 2", "bedroom 3", "livingroom", "kitchen", ],
    color: "grey",
    garage: {
        type: "double",
        numberOfCars: 2,
        isOpen: false,
        openCloseGarage: function () {
            house.garage.isOpen = !house.garage.isOpen;
        }
    },
    hasSolarPanels: true,
}
