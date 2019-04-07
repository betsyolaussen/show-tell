new Vue ({
    el: "#app",
    data: {
        cameras: [
            {
                name: "Original Kodak Camera",
                manufacturer: "Eastman Dry Plates and Film Company",
                yearMade: 1888,
                locationMade: "Rochester, New York",
                description: "First camera made for the amateur photographer."
            },
            {
                name: "Pocket Kodak",
                manufacturer: "Eastman Kodak Company",
                yearMade: 1895,
                locationMade: "Rochester, New York",
                description: "Compact camera that only cost $5."
            },
            {
                name: "The Brownie Camera",
                manufacturer: "Eastman Kodak Company",
                yearMade: 1900,
                locationMade: "Rochester, New York",
                description: "Created a new mass market for photography."
            },
            {
                name: "Retina Series 35mm Camera",
                manufacturer: "Kodak",
                yearMade: [1934-1956],
                locationMade: "Stuttgart-Wangen, Germany",
                description: "Revolutionary in the type of film it accepted, did not need a dark room or light tight bag."
            },
            {
                name: "Instamatic Camera",
                manufacturer: "Kodak",
                yearMade: 1963,
                locationMade: "United States, Germany and UK",
                description: "Inexpensive, easy to load point and shoot camera."
            }
        ]
    }
});