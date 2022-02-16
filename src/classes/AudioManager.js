window.AudioContext = window.AudioContext || window.webkitAudioContext; // TODO:  refactor to class property

export class AudioManager {
  constructor() {
    this.ctx = new AudioContext();
    this.oscillators = {};
    this.noteIsPlaying = false;
  }

  injectRecordNote(recordNote) {
    this.recordNote = recordNote;
  }

  midiToFrequency(number) {
    const a = 440;
    return (a / 32) * 2 ** ((number - 9) / 12);
  }

  noteOn(note, velocity) {
    console.log('aa', this.oscillators);
    // if (!this.oscillators[note.toString()]) {
    if (!this.noteIsPlaying ) {
      this.noteIsPlaying = !this.noteIsPlaying;
      console.log("noteOn");
      const oscGain = this.ctx.createGain();
      oscGain.gain.value = 0.33;
      const velocityGainAmount = (1 / 127) * velocity;
      const velocityGain = this.ctx.createGain();
      // const selectElement = document.querySelector("#waveform option:checked"); // TODO: put into settings manager

      const osc = this.ctx.createOscillator();
      osc.type = "sine"; //TODO: create pulldown
      osc.frequency.value = this.midiToFrequency(note);
      velocityGain.gain.value = velocityGainAmount;

      osc.connect(oscGain);
      osc.connect(velocityGain);
      velocityGain.connect(this.ctx.destination);

      osc.gain = oscGain;

      this.oscillators[note.toString()] = osc;
      osc.start();
      this.recordNote({ note, velocity });
    }
  }

  noteOff(note) {
    if (Object.entries(this.oscillators).length > 0) {
      const osc = this.oscillators[note.toString()];
      const oscGain = osc.gain;

      //nobody knows whats going on here, but its works...
      oscGain.gain.setValueAtTime(oscGain.gain.value, this.ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(
        0.001,
        this.ctx.currentTime + 0.003
      );
      setTimeout(() => {
        osc.stop();
        osc.disconnect();
      }, 20);

      delete this.oscillators[note.toString()];
    }
  }
  noteOffWithKeyPress(note) {
    if (this.noteIsPlaying) {
      // this.noteIsPlaying = !this.noteIsPlaying;
      console.log("noteOff");
      console.log(this.oscillators);
      // if (Object.entries(this.oscillators).length > 0) {
      const osc = this.oscillators[note.toString()];
      console.log("osc", osc);
      setTimeout(() => {
        osc.stop();
        osc.disconnect();
      }, 200); // length of note

      delete this.oscillators[note.toString()];
      // }
    }
    this.noteIsPlaying = false;
  }

  noteOffWithDuration(note, ms) {
    const osc = this.oscillators[note.toString()];
    setTimeout(() => {
      osc.stop();
      osc.disconnect();
    }, ms);

    delete this.oscillators[note.toString()];
  }
}
