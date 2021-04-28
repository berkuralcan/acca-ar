const models = [
    {
        id: 1,
        name: "bedside",
        imgURL: "bedside.png",
        modelSRC: [
            "bedside/Bedside.gltf",
            ],
        iosSRC: [
                "bedside/bedside.usdz"
            ],
        variants: []
    },
    {
        id: 2,
        name: "desk",
        imgURL: "desk.png",
        modelSRC: [
            "desk/Desk.gltf",
            ],
        iosSRC: [
            "desk/desk.usdz"
        ],
        variants: [],
    },
    {
        id: 3,
        name: "sofa",
        imgURL: "sofa.png",
        modelSRC: [
            "sofa/leather/Sofa.gltf",
            "sofa/fabric/Sofa.gltf"
        ],
        iosSRC: [
            "sofa/leather/sofa.usdz",
            "sofa/fabric/sofa.usdz"
        ],
        variants: [ "sofa-1.png", "sofa-2.png"],
    },
    {
        id: 4,
        name: "soda-can",
        imgURL: "soda-can.png",
        modelSRC: ["soda-can/Soda-can.gltf",],
        iosSRC: [
            "soda-can/soda-can.usdz"
        ],
        variants: [],
    },
    {
        id: 5,
        name: "plate",
        imgURL: "plate.png",
        modelSRC: ["plate/Plate.gltf",],
        iosSRC: [
            "plate/plate.usdz"
        ],
        variants: [],
    },
    {
        id: 6,
        name: "sink",
        imgURL: "sink.png",
        modelSRC: ["sink/Sink.gltf",],
        iosSRC: [
            "sink/sink.usdz"
        ],
        variants: [],
    },
    {
        id: 7,
        name: "dresser",
        imgURL: "dresser.png",
        modelSRC: ["dresser/Dresser.gltf",],
        iosSRC: [
            "dresser/dresser.usdz"
        ],
        variants:[]
    },
    {
        id: 8,
        name: "library",
        imgURL: "library.png",
        modelSRC: ["library/Library.gltf"],
        iosSRC: [
            "library/library.usdz"
        ],
        variants: [],
    },
    {
        id: 9,
        name: "coffeetable",
        imgURL: "coffeetable.png",
        modelSRC: ["coffeetable/Coffeetable.gltf"],
        iosSRC: [
            "coffeetable/coffeetable.usdz"
        ],
        variants: ["coffeetable-1.png", "coffeetable-2.png"],
    }
  ]

  export default models