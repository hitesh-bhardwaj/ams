import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function useRouteColors() {
  const router = useRouter();
  const [colors, setColors] = useState({
    color1: "#D467D7",
    color2: "#669FE5",
    color3: "#669FE5",
  });

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setColors({
          color1: "#D467D7",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/ic":
        setColors({
          color1: "#F74141",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/advamryl":
        setColors({
          color1: "#F74141",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/advacryl":
        setColors({
          color1: "#D7B3E1",
          color2: "#669FE5",
          color3: "#D467D7",
        });
        break;
      case "/advacrylplus":
        setColors({
          color1: "#D7B3E1",
          color2: "#669FE5",
          color3: "#D467D7",
        });
        break;
      case "/endo":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/hernia":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/ama":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/needle":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/rnd":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/oem":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
        case "/advapd":
        setColors({
          color1: "#A5BBCE",
          color2: "#A5BBCE",
          color3: "#CCCCCC",
        });
        break;
        case "/advacat":
          setColors({
            color1: "#DDCB9F",
            color2: "#DDCB9F",
            color3: "#CCCCCC",
          });
          break;
          case "/advalene":
            setColors({
              color1: "#D5D6F3",
              color2: "#D5D6F3",
              color3: "#307FB2",
            });
            break;
            case "/advabond":
              setColors({
                color1: "#669DE5",
                color2: "#669DE5",
                color3: "#FFCDBC",
              });
              break;
              case "/advalon":
                setColors({
                  color1: "#DFD6F3",
                  color2: "#DFD6F3",
                  color3: "#307FB2",
                });
                break;
                case "/advasyl":
                  setColors({
                    color1: "#DFD6F3",
                    color2: "#DFD6F3",
                    color3: "#307FB2",
                  });
                  break;
      default:
        setColors({
          color1: "#D467D7",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
    }
  }, [router.pathname]);

  return colors;
}

export default useRouteColors;
