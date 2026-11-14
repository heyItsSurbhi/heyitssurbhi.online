import { useEffect, useState } from 'react';
import ProductScreen from './ProductScreen';

const scenes = {
  intro: {
    frames: ['/avatar/ava-wave-pumps-base.png'],
    hand: '/avatar/ava-wave-hand.png',
    caption: 'Surbhi smiles and waves hello',
    prepared: true,
    reel: 'hello',
  },
  work: {
    frames: ['/avatar/ava-work-1.jpg', '/avatar/ava-work-type.jpg'],
    caption: 'Surbhi sitting at her laptop in the office, typing',
    reel: 'type',
  },
  skills: {
    frames: ['/avatar/ava-skills-board.png'],
    caption: 'Surbhi showing product data on the board',
    prepared: true,
    reel: 'idle',
  },
  education: {
    frames: ['/avatar/ava-edu-1.jpg', '/avatar/ava-edu-lift.jpg'],
    caption: 'Surbhi writing in a book',
    reel: 'write',
  },
  cases: {
    frames: ['/avatar/ava-meet-1.jpg', '/avatar/ava-meet-talk.jpg'],
    caption: 'Surbhi talking with stakeholders beside a laptop',
    reel: 'talk',
  },
  contact: {
    frames: ['/avatar/ava-phone-1.jpg', '/avatar/ava-phone-2.jpg', '/avatar/ava-phone-up.jpg', '/avatar/ava-phone-2.jpg'],
    caption: 'Surbhi looks at her phone',
    reel: 'phone',
  },
};

function cutout(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const w = image.naturalWidth;
      const h = image.naturalHeight;
      canvas.width = w;
      canvas.height = h;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.drawImage(image, 0, 0);
      const pixels = context.getImageData(0, 0, w, h);
      const data = pixels.data;
      const count = w * h;
      const bg = new Uint8Array(count);
      const isBg = (i) => {
        const o = i * 4;
        const r = data[o];
        const g = data[o + 1];
        const b = data[o + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        return max < 28 && max - min < 14;
      };
      const stack = [];
      const push = (x, y) => {
        const i = y * w + x;
        if (bg[i] || !isBg(i)) return;
        bg[i] = 1;
        stack.push(i);
      };
      for (let x = 0; x < w; x += 1) {
        push(x, 0);
        push(x, h - 1);
      }
      for (let y = 0; y < h; y += 1) {
        push(0, y);
        push(w - 1, y);
      }
      while (stack.length) {
        const i = stack.pop();
        const x = i % w;
        const y = (i - x) / w;
        if (x > 0) push(x - 1, y);
        if (x + 1 < w) push(x + 1, y);
        if (y > 0) push(x, y - 1);
        if (y + 1 < h) push(x, y + 1);
      }
      for (let i = 0; i < count; i += 1) {
        const o = i * 4;
        if (bg[i]) {
          data[o + 3] = 0;
          continue;
        }
        const x = i % w;
        const y = (i - x) / w;
        const touches =
          (x > 0 && bg[i - 1]) ||
          (x + 1 < w && bg[i + 1]) ||
          (y > 0 && bg[i - w]) ||
          (y + 1 < h && bg[i + w]);
        const r = data[o];
        const g = data[o + 1];
        const b = data[o + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        if (touches && max < 36 && max - min < 18) data[o + 3] = 0;
      }
      context.putImageData(pixels, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    image.onerror = () => resolve(src);
    image.src = src;
  });
}

const cutoutCache = new Map();

function cutoutCached(src) {
  if (!cutoutCache.has(src)) cutoutCache.set(src, cutout(src));
  return cutoutCache.get(src);
}

function useFrames(frames, prepared) {
  const [urls, setUrls] = useState(() => (prepared ? frames : frames.map(() => null)));

  useEffect(() => {
    if (prepared) {
      setUrls(frames);
      return undefined;
    }
    let alive = true;
    Promise.all(frames.map(cutoutCached)).then((next) => {
      if (alive) setUrls(next);
    });
    return () => {
      alive = false;
    };
  }, [frames, prepared]);

  return urls;
}

export default function AvatarScene({ scene }) {
  const config = scenes[scene];
  const urls = useFrames(config?.frames ?? [], Boolean(config?.prepared));

  if (!config) return null;

  return (
    <figure
      id={`scene-${scene}`}
      className={['avatar-reel', 'is-clip', `is-${config.reel}`, config.board ? 'is-board' : '']
        .filter(Boolean)
        .join(' ')}
    >
      <div className="avatar-motion">
        {config.board && (
          <div className="board-screen-wrap">
            <ProductScreen />
          </div>
        )}
        <div className="avatar-tone">
          {config.frames.map((src, index) =>
            urls[index] ? (
              <img
                key={`${src}-${index}`}
                src={urls[index]}
                alt={index === 0 ? config.caption : ''}
                className={index === 0 ? 'is-on' : ''}
                width="768"
                height="1024"
                decoding="async"
              />
            ) : null
          )}
        </div>
        {config.hand ? (
          <img className="avatar-hand" src={config.hand} alt="" width="768" height="1024" decoding="async" />
        ) : null}
      </div>
    </figure>
  );
}
