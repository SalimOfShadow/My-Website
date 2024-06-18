function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../Images", false, /\.(jpg|png|jpe?g|svg|jfif)$/)
);
export default images;
