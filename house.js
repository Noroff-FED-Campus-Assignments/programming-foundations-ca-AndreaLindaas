const house = {
    doors: 4,
    windows: 12,
    floors: 2,
    houseSizeInSqm: 160,
    color: "grey",
    hasSolarPanels: true,
    rooms: [
        {
            roomType: "hallway",
            name: null,
            color: "blue",
        },
        {
            roomType: "livingroom",
            name: null,
            color: "blue",
        },
        {
            roomType: "kitchen",
            name: null,
            color: "grey",
        },
        {
            roomType: "bedroom",
            name: "parents bedroom",
            color: "blue",
        },
        {
            roomType: "bedroom",
            name: "Leanders bedroom",
            color: "blue",
    
        },
        {
            roomType: "bedroom",
            name: "Leonoras bedroom",
            color: "pink",
            
        },
        {
            roomType: "bathroom",
            name: "upstairs bathroom",
            color: "grey",
            
        },
        {
            roomType: "bathroom",
            name: "downstairs bathroom",
            color: "white",
        },
    ],
    
    garage: {
        type: "double", 
        numberOfCars: 2,
        isOpen: false,
        openCloseGarage: function () {
            house.garage.isOpen = !house.garage.isOpen;
        }
    },
    
}
