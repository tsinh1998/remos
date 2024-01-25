
$("#usa-vectormap").vectorMap({
    map: "us_merc_en",
    backgroundColor: "#F2F7FB",
    regionStyle: {
        initial: {
            fill: "#D8E6F1"
        },
        hover: {
            fill: "#2377FC",
            "fill-opacity": 1,
        }
    },
    markerStyle: {
        initial: {
            r: 9,
            fill: "#556ee6",
            "fill-opacity": .9,
            stroke: "#fff",
            "stroke-width": 7,
            "stroke-opacity": .4
        },
        hover: {
            stroke: "#fff",
            "fill-opacity": 1,
            "stroke-width": 1.5
        }
    }
});
