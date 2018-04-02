import React, { Component } from 'react'
import Head from 'next/head'

import SceneOne from '../components/SceneOne/SceneOne'

export default class extends Component {
  state = {
    sceneOne: true,
  }

  render() {
    const { sceneOne } = this.state

    return (
      <div>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link key="manifest" rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="./static/css/fonts.css" />
        </Head>
        {sceneOne &&
          <SceneOne />
        }
        <style jsx global>{`

          @import './static/scss/variables';
          @import './static/scss/mixins';

          * {
            margin: 0;
            padding: 0;
            border: 0;
            list-style: none;
          }

          body {
            color: white;
            font-family: $ff;
            background-color: $black;
            line-height: 1.6em;
          }

          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 600px;
            margin: 0 auto;
            padding: 0 0 #{$gutter * 3};
            box-sizing: border-box;
            @media(max-width: 768px) {
              padding: 0 10px #{$gutter * 3};
            }
          }

          .standard-flex {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-content: center;
          }

          .text-center {
            text-align: center;
          }

          @for $i from 1 to 10 {
            .air-#{$i} {
              margin-bottom: #{ $i * $gutter};
            }
          }

          .standard-title {
            color: white;
            font-size: #{$gutter * 2};
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            text-shadow: 1px 1px darken(white, 75%), 2px 2px darken(white, 75%), 3px 3px darken(white, 75%), 4px 4px darken(white, 75%), 5px 5px darken(white, 75%);
            @media(max-width: 768px) {
              font-size: 24px;
            }
          }

          .standard {
            &-subtitle, &-semititle {
              color: white;
              font-size: #{$gutter * 3};
              font-weight: bold;
              text-align: center;
              text-transform: uppercase;
              text-shadow: 1px 1px darken(white, 75%), 2px 2px darken(white, 75%), 3px 3px darken(white, 75%), 4px 4px darken(white, 75%), 5px 5px darken(white, 75%);
              @media(max-width: 768px) {
                font-size: 24px;
              }
            }
            &-semititle {
              font-size: #{$gutter * 2};
              @media(max-width: 768px) {
                font-size: 18px;
              }
            }
          }

          .standard-list-item {
            color: white;
            font-size: 18px;
            margin-bottom: 12px;
            padding: 12px 16px;
            list-style: none;
            position: relative;
            border: 0;
          }

        `}</style>
      </div>
    )
  }
}
