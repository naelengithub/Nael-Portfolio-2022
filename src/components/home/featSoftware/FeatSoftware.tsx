import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Games } from "./games/Games";
import { GameHover } from "./games/GameHover";
import Link from "next/link";

import styles from "./featsoftware.module.css";

export interface FeatSoftwareProps {
  className?: string;
}

/**
 * @name FeatSoftware
 * @description FAQs feature component.
 */
export const FeatSoftware = (props: FeatSoftwareProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: "#C6878F",
          display: "flex",
          position: "relative",
          height: screenWidthSize / 1.2,
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            height: screenWidthSize / 2.3,
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <Link href="/rock-paper-scissors">
              <div
                style={{
                  position: "absolute",
                  top: -(screenWidthSize / 10) * 2,
                  left: (screenWidthSize / 10) * 6,
                  width: screenWidthSize / 10,
                  boxShadow: "-15px -10px",
                }}
              >
                <div
                  style={{
                    height: screenWidthSize / 20,
                    width: screenWidthSize / 10,
                  }}
                >
                  <Games
                    alt="Play rock paper scissors"
                    src="/BnW/RPS.png"
                    layout="fill"
                  >
                    <GameHover gameName="Rock Paper Scissors" />
                  </Games>
                </div>
              </div>
            </Link>
            <Link href="https://naelengithub.github.io/Gato/">
              <div
                style={{
                  position: "absolute",
                  top: -(screenWidthSize / 10) * 2,
                  left: (screenWidthSize / 10) * 8,
                  width: screenWidthSize / 10,
                  boxShadow: "-15px -10px",
                }}
              >
                <div
                  style={{
                    height: screenWidthSize / 20,
                    width: screenWidthSize / 10,
                  }}
                >
                  <Games
                    alt="Play tic tac toe"
                    src="/BnW/TicTacToe.png"
                    layout="fill"
                  >
                    <GameHover gameName="Tic Tac Toe" />
                  </Games>
                </div>
              </div>
            </Link>
          </div>
          <h1
            style={{
              fontSize: screenWidthSize / 6,
              margin: 0,
            }}
          >
            product
            <br />
            development
          </h1>
        </div>
        <div>
          <h1
            style={{
              margin: "0",
              fontSize: screenWidthSize / 40,
              position: "absolute",
              top: screenWidthSize / 2.4,
              left: "1rem",
            }}
          >
            [landing on]
          </h1>
        </div>
      </div>
    </div>
  );
};
