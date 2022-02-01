// import "../styles/drumKit.css";

// export const DrumKit = () => {
//   const drums = new Howl({
//     src: ["./drums/drums.webm", "./drums/drums.mp3"],
//     sprite: {
//       "CYCdh_AcouKick-14": [0, 625.8503401360545],
//       "CYCdh_Crash-01": [2000, 15228.571428571428],
//       "CYCdh_Kurz02-Snr02": [19000, 496.82539682539687],
//       "CYCdh_LudRimC-07": [21000, 1442.879818594104],
//       "CYCdh_Sab_ClHat-06": [24000, 619.0476190476204],
//       "KHats Open-07": [26000, 2863.582766439908],
//     },
//   });

//   //drums.play();

//   const drumkit = document.querySelector(".drumkit");

//   function playDrum(event) {
//     if (event.target.classList.contains("pad")) {
//       event.preventDefault();
//       let soundToPlay = event.target.dataset.sound;
//       drums.play(soundToPlay);
//     }
//   }

//   function playSnare() {
//     let soundToPlay = "CYCdh_Kurz02-Snr02";
//     console.log(soundToPlay);
//     drums.play(soundToPlay);
//   }

//   function playCrash() {
//     let soundToPlay = "CYCdh_Crash-01";
//     console.log(soundToPlay);
//     drums.play(soundToPlay);
//   }
//   function playClap() {
//     let soundToPlay = "CYCdh_LudRimC-07";
//     console.log(soundToPlay);
//     drums.play(soundToPlay);
//   }
//   function playClHiHat() {
//     let soundToPlay = "CYCdh_Sab_ClHat-06";
//     console.log(soundToPlay);
//     drums.play(soundToPlay);
//   }
//   function playOpHiHat() {
//     let soundToPlay = "KHats Open-07";
//     console.log(soundToPlay);
//     drums.play(soundToPlay);
//   }
//   function playKick() {
//     let soundToPlay = "CYCdh_AcouKick-14";
//     console.log(soundToPlay);
//     drums.play(soundToPlay);
//   }

//   document.addEventListener("keydown", (e) => {
//     if (e.key === "l") {
//       playSnare();
//       console.log("snare");
//     } else {
//       if (e.key === "f") {
//         playCrash();
//         console.log("crash");
//       } else {
//         if (e.key === "s") {
//           playClap();
//           console.log("clap");
//         } else {
//           if (e.key === "d") {
//             playClHiHat();
//             console.log("closed high hat");
//           } else {
//             if (e.key === "j") {
//               playKick();
//               console.log("kick");
//             } else {
//               if (e.key === "k") {
//                 playClHiHat();
//                 console.log("closed high hat");
//               }
//             }
//           }
//         }
//       }
//     }
//   });

//   drumkit.addEventListener("click", () => {
//     if (e.target.classList.contains("pad")) {
//       let soundToPlay = e.target.dataset.sound;
//       drums.play(soundToPlay);
//     }
//   });

//   return <div className="drumKit">drumKit</div>;

//   //TODO MAKE JSX
//   // <body>
//   //   <div class="drumkit">
//   //     <div class="pad clap" data-sound="CYCdh_LudRimC-07">
//   //       <img src="./drumkit icons/clap.png" alt="clap" />
//   //     </div>
//   //     <div class="pad clHat" data-sound="CYCdh_Sab_ClHat-06">
//   //       <img src="./drumkit icons/closed high hat.png" alt="closed high hat" />
//   //     </div>
//   //     <div class="pad crash" data-sound="CYCdh_Crash-01">
//   //       <img src="./drumkit icons/crash.png" alt="crash" />
//   //     </div>
//   //     <div class="pad kick" data-sound="CYCdh_AcouKick-14">
//   //       <img src="./drumkit icons/kick.png" alt="kick" />
//   //     </div>
//   //     <div class="pad opHat" data-sound="KHats Open-07">
//   //       <img src="./drumkit icons/open high hat.png" alt="open high hat" />
//   //     </div>
//   //     <div class="pad snare" data-sound="CYCdh_Kurz02-Snr02">
//   //       <img src="./drumkit icons/snare.png" alt="clap" />
//   //     </div>
//   //   </div>
// };
