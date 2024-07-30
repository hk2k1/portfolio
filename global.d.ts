// global.d.ts
interface Window {
  umami: {
    track: (event: string) => void;
  };
}
