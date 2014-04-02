/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "4.0.0.1747",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bird',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'tweet',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['audio/tweet.mp3']
            },
            {
                id: 'cloud',
                type: 'rect',
                rect: ['-177', '346','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'bird',
                symbolName: 'bird',
                autoPlay: {

                }
            },
            {
                id: 'cloud',
                symbolName: 'cloud',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(67,154,203,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1020px'],
                ["style", "width", '760px']
            ],
            "${_bird}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "flying": 1000
            },
            timeline: [
                { id: "eid1", tween: [ "style", "${_bird}", "left", '773px', { fromValue: '0px'}], position: 1000, duration: 2000 },
                { id: "eid2", tween: [ "style", "${_bird}", "top", '219px', { fromValue: '0px'}], position: 1000, duration: 2000 },
                { id: "eid6", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bird}', [] ], ""], position: 5000 }            ]
        }
    }
},
"bird": {
    version: "4.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "4.0.0.1747",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bird',
                    type: 'image',
                    rect: ['0px', '0px', '238px', '238px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bird.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bird}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '238px'],
                ["style", "width", '238px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"cloud": {
    version: "4.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "4.0.0.1747",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cloud-1',
                    type: 'image',
                    rect: ['0px', '0px', '143px', '94px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cloud-1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cloud-1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '143px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_cloud-1}", "left", '1022px', { fromValue: '0px'}], position: 0, duration: 5000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5327561");
