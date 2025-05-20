declare module 'vanta/dist/vanta.net.min' {
  const NET: (options: {
    el: HTMLElement;
    THREE: typeof THREE;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    // Add other options for your specific Vanta effect
  }) => {
    destroy: () => void;
    setOptions: (options: Partial<typeof options>) => void;
  };
  export default NET;
}