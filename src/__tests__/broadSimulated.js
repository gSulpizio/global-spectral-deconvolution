import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { generateSpectrum } from 'spectrum-generator';

let { gsd, joinBroadPeaks } = require('..');

describe('Global spectra deconvolution simulated broad spectra', () => {
  // Test case obtained from Pag 443, Chap 8.
  it('Should give 1 broad peak and 1 smaller peak', () => {
    const peaks = [
      [
        [530, 0.03, 120],
        [140, 0.0025, 90],
      ],
    ];

    const spectrum = generateSpectrum(peaks, {
      from: 0, // default value: 0
      to: 1000, // default value: 1000
      nbPoints: 10001, // default value: 10001
      factor: 10, // default value would covers 99.99% of the surface and depends on the shape
      shape: {
        kind: 'gaussian', // default value gaussian
      },
    });

    let result = gsd(spectrum, {
      sgOptions: {
        noiseLevel: 0,
        windowSize: 7,
        polynomial: 3,
      },
      smoothY: false,
    });
    joinBroadPeaks(result, { width: 20, shape: { kind: 'gaussian' } });
    let ySpectrumRendered = {
      x: Array.from(spectrum.x),
      y: Array.from(spectrum.y),
    };
    console.log(ySpectrumRendered);

    writeFileSync(
      '/home/giustinosulpizio/git/Cheminfo/global-spectral-deconvolution/examples/y.JSON',
      JSON.stringify(ySpectrumRendered),
      'utf8',
    );

    expect(result).toHaveLength(2);

    result.forEach((peak) => {
      if (Math.abs(peak.x - 531) < 20) {
        expect(peak.width).toBeGreaterThanOrEqual(90);
        expect(peak.width).toBeLessThan(150);
      }
    });
    result.forEach((peak) => {
      if (Math.abs(peak.x - 140) < 20) {
        expect(peak.width).toBeGreaterThanOrEqual(70);
        expect(peak.width).toBeLessThan(110);
      }
    });
  });
});
