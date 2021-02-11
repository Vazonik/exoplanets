export default ({
  "particles": {
      "number": {
          "value": 300,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.02
      },
      "move": {
          "direction": "top-right",
          "speed": 0.4,
          "out_mode": "out"
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.0
          }
      }
  },
  "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          },
          "bubble": {
            "distance": 83.91608391608392,
            "size": 2,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          }
      }
  },
  "retina_detect": true
});