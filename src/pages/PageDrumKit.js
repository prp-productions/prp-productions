import DrumKit from "../components/DrumKit";

export const PageDrumKit = () => {
  return (
    <div>
      <h1>Smash Kit</h1>
      <div className="midi-tag">use keys 1,2,3 - 7,8,9</div>
      <div>
        <DrumKit />
      </div>
    </div>
  );
};
