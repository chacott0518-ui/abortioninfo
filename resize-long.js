const sharp = require('sharp');

sharp('public/images/임신중절수술/임신중절수술.webp')
  .resize({ width: 760, withoutEnlargement: true })
  .webp({ quality: 68 })
  .toFile('public/images/임신중절수술/임신중절수술-optimized.webp')
  .then(() => console.log('완료'))
  .catch(err => console.error('에러:', err));
