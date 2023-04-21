import { useEffect, useRef } from "react";
import "./WheelinatorComponent.scss";

let savedSpinValues = [0, 0, 0];

const WheelinatorComponent = ({
  layers = 1,
  animationTiming = [5, 4, 3],
  dummySpins = [4, 3, 2],
}) => {
  const layer0 = useRef(null);
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layerNodes = [layer0, layer1, layer2];

  //this function initiates the given layer for the wheel
  const initLayer = (layer) => {
    const currLayerChildren = layerNodes[layer].current.children[0].children;
    for (let i = 0; i < currLayerChildren.length; i++) {
      const element = currLayerChildren[i];
      element.style.transform = `rotate(${
        (360 / currLayerChildren.length) * i
      }deg)`;
      element.style.width = `${(100 / currLayerChildren.length) * 3.1}%`;
      element.style.zIndex = i;
    }
    layerNodes[layer].current.style.transform = "rotate(0deg)";
    layerNodes[layer].current.style.animationDuration =
      animationTiming[layer] + "s";
  };

  //this function initiates the whole wheel based on layers given
  const initWheel = (layers) => {
    for (let i = 0; i < layers; i++) {
      initLayer(i);
    }
  };

  // this function sets custom style tag for the given layer
  const setAnimationKeyframe = (winner, layer) => {
    const currLayerChildren = layerNodes[layer].current.children[0].children;
    const spinValue =
      360 * dummySpins[layer] -
      ((winner - 1) * 360) / currLayerChildren.length -
      (savedSpinValues[layer] % 360);

    let currentStyle = document.getElementById(`keyframe-level-${layer}`);
    currentStyle && currentStyle.remove();

    document.head.insertAdjacentHTML(
      "beforeend",
      `<style id=keyframe-level-${layer}>
        @keyframes spinning-${layer} {
          from {
            transform: rotate(${savedSpinValues[layer]}deg);
          }
          to {
            transform: rotate(${savedSpinValues[layer] + spinValue}deg);
          }
        }
      </style>`
    );

    savedSpinValues[layer] += spinValue;
    setTimeout(() => {
      layerNodes[
        layer
      ].current.style.transform = `rotate(${savedSpinValues[layer]}deg)`;
    }, 500);
  };

  //this function spins the layer that you provide to the given winning section
  const spin = (winner, layer) => {
    if (
      winner <= 0 ||
      typeof winner !== "number" ||
      winner > layerNodes[layer].current.children[0].children.length
    ) {
      return;
    }

    winner = Math.floor(winner);
    setAnimationKeyframe(winner, layer);

    layerNodes[layer].current.classList.remove("active");
    setTimeout(() => {
      layerNodes[layer].current.classList.add("active");
    }, 10);
  };

  //this function also spins the wheel, but is used in multi-layered cases
  const start = (winner, layer) => {
    for (let i = 0; i < this.layers; i++) {
      let delay = 0;

      for (let j = i; j >= 0; j--) {
        if (j === 0) {
          continue;
        }
        delay += animationTiming[j];
      }

      setTimeout(() => {
        this.spin(winner, i);
      }, delay * 1000);
    }
  };

  //this function handles spin-button clicking.
  const handleSpin = () => {
    spin(7, 0);
    // spin(7, 1);
  };

  useEffect(() => {
    initWheel(layers);
  }, []);

  return (
    <div className="wheelinator">
      <div
        className="wheelinator-layer-0 wheelinator-layer-common"
        id="wheel-layer-0"
        ref={layer0}
      >
        <div className="wheelinator__anker">
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">^</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">2</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">3</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">4</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">5</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">^</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">7</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">8</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">9</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">10</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">^</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">12</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">13</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">14</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">15</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">^</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">17</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">18</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">19</div>
          </div>
          <div className="wheelinator__section">
            <div className="wheelinator__section-half">20</div>
          </div>
        </div>
      </div>
      {layers > 1 && (
        <div
          className="wheelinator-layer-1 wheelinator-layer-common"
          id="wheel-layer-1"
          ref={layer1}
        >
          <div className="wheelinator__anker">
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">^</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">2</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">3</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">4</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">5</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">^</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">7</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">8</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">9</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">10</div>
            </div>
          </div>
        </div>
      )}
      {layers > 2 && (
        <div
          className="wheelinator-layer-2 wheelinator-layer-common"
          id="wheel-layer-2"
          ref={layer2}
        >
          <div className="wheelinator__anker">
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">1</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">2</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">3</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">4</div>
            </div>
            <div className="wheelinator__section">
              <div className="wheelinator__section-half">5</div>
            </div>
          </div>
        </div>
      )}
      <div
        className="wheelinator__button"
        id="spin-button"
        onClick={handleSpin}
      ></div>
    </div>
  );
};

export default WheelinatorComponent;
