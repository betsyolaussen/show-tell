var camera = new Vue ({
    el: "#myCollection",
    data: {
        cameras: [
            {
                name: "Original Kodak Camera",
                manufacturer: "Eastman Dry Plates and Film Company",
                yearMade: 1888,
                locationMade: "Rochester, New York",
                description: "First camera made for the amateur photographer.",
                id: 1 
            },
            {
                name: "Pocket Kodak",
                manufacturer: "Eastman Kodak Company",
                yearMade: 1895,
                locationMade: "Rochester, New York",
                description: "Compact camera that only cost $5.",
                id: 2
            },
            {
                name: "The Brownie Camera",
                manufacturer: "Eastman Kodak Company",
                yearMade: 1900,
                locationMade: "Rochester, New York",
                description: "Created a new mass market for photography.",
                id: 3
            },
            {
                name: "Retina Series 35mm Camera",
                manufacturer: "Kodak",
                yearMade: "1934 to 1956",
                locationMade: "Stuttgart-Wangen, Germany",
                description: "Revolutionary in the type of film it accepted, did not need a dark room or light tight bag.",
                id: 4
            },
            {
                name: "Instamatic Camera",
                manufacturer: "Kodak",
                yearMade: 1963,
                locationMade: "United States, Germany and UK",
                description: "Inexpensive, easy to load point and shoot camera.",
                id: 5
            }
        ]
        
    },

    methods: {
        deleteCamera: function(camerasObject) {
            this.cameras = this.cameras.filter
            (function (camera) {
                if (camera.name !== camerasObject.name) {
                    return true;
                } else {
                    return false;
                }
            })
        },
    }
});