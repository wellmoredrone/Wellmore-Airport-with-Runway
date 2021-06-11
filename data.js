var APP_DATA = {
  "scenes": [
    {
      "id": "0-airport",
      "name": "Airport",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1231551141882079,
        "pitch": 0.22641887549407258,
        "fov": 0.7252356653911407
      },
      "linkHotspots": [
        {
          "yaw": 0.11444723843926496,
          "pitch": 0.07237324634977327,
          "rotation": 0,
          "target": "1-3d-model"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0390933739599681,
          "pitch": 0.4006611234972848,
          "title": "Blair 1 Pit May 2021",
          "text": "Text"
        },
        {
          "yaw": -0.7825384645469562,
          "pitch": 0.09035919809392468,
          "title": "Eagle 1 Pit May 2021",
          "text": "Text"
        },
        {
          "yaw": -0.8674991630020497,
          "pitch": 0.161102822716499,
          "title": "Blair Development",
          "text": "Text"
        },
        {
          "yaw": 0.7100418025655095,
          "pitch": 0.20549570024921238,
          "title": "Eagle Development",
          "text": "Text"
        },
        {
          "yaw": 2.840305333730962,
          "pitch": 0.2054174254986485,
          "title": "DRF-3",
          "text": "Text"
        },
        {
          "yaw": -1.688091389679542,
          "pitch": 0.2544317192765071,
          "title": "DRF-1",
          "text": "Text"
        },
        {
          "yaw": 0.8705865538194644,
          "pitch": 0.31353711820744223,
          "title": "Eagle 2 Pit first half of May 2021",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-3d-model",
      "name": "3D Model",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.7653850086727365,
        "pitch": 0.19627649501261857,
        "fov": 0.7252356653911407
      },
      "linkHotspots": [
        {
          "yaw": 2.756693478019338,
          "pitch": 0.042231220742548814,
          "rotation": 0,
          "target": "0-airport"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.227692373230841,
          "pitch": 0.3503811994125936,
          "title": "Runway Location",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Airport 5-28-21",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
