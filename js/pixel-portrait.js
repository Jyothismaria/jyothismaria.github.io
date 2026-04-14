/**
 * pixel-portrait.js
 * Renders a pixelated dissolve intro on the landing page photo.
 * - Starts at 32px blocks → 16 → 8 → 4 → 2 → 1 (full res)
 * - Tinted with emerald palette on first frame
 * - Smooth CSS crossfade between stages
 * Usage: PixelPortrait.init('canvas-id', 'img-src')
 */

const PixelPortrait = (() => {

  function init(canvasId, imgSrc) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Set canvas to match container
      const size = canvas.offsetWidth;
      canvas.width = size;
      canvas.height = size;
      canvas.style.borderRadius = '0';
      canvas.style.clipPath = 'none';
      canvas.style.boxShadow = 'none';

      // Pixel sizes: coarse → fine
      const stages = [48, 28, 16, 10, 6, 3, 1];
      let stageIndex = 0;

      function drawStage(pixelSize) {
        // Draw image at low res then scale up (pixelation trick)
        ctx.imageSmoothingEnabled = false;

        if (pixelSize === 1) {
          // Final: real photo, full res
          ctx.drawImage(img, 0, 0, size, size);
          // Slight emerald tint overlay that fades out
          canvas.classList.add('resolved');
          return;
        }

        const small = Math.max(1, Math.floor(size / pixelSize));
        // Draw small
        ctx.drawImage(img, 0, 0, small, small);
        // Scale back up — pixelated
        ctx.drawImage(canvas, 0, 0, small, small, 0, 0, size, size);

        // Emerald tint on early stages
        if (pixelSize >= 16) {
          ctx.fillStyle = 'rgba(15, 58, 26, 0.35)';
          ctx.fillRect(0, 0, size, size);
        } else if (pixelSize >= 6) {
          ctx.fillStyle = 'rgba(15, 58, 26, 0.15)';
          ctx.fillRect(0, 0, size, size);
        }
      }

      // Run through stages
      function nextStage() {
        if (stageIndex >= stages.length) return;
        drawStage(stages[stageIndex]);
        stageIndex++;
        if (stageIndex < stages.length) {
          const delay = stageIndex <= 2 ? 180 : stageIndex <= 4 ? 120 : stageIndex <= 5 ? 80 : 60;
          setTimeout(nextStage, delay);
        }
      }

      // Start after a tiny delay so page renders first
      setTimeout(nextStage, 200);
    };

    img.onerror = () => {
      // Fallback: just show initials
      canvas.style.display = 'none';
      const fallback = canvas.parentElement.querySelector('.photo-initials');
      if (fallback) fallback.style.display = 'flex';
    };

    img.src = imgSrc;
  }

  return { init };
})();
