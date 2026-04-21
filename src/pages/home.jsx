import style from './home.module.css';
function Home() {
  return (
    <div className={style.home}>
      <h1>Welcome to the Recipe App!</h1>
      <p>Discover delicious recipes and share your own culinary creations with our vibrant community of food enthusiasts.</p>
      <p>Whether you're a seasoned chef or just starting out, our app has something for everyone. Explore a wide variety of recipes, from quick and easy meals to gourmet dishes, all at your fingertips.</p>
      <p>Join us today and start cooking up a storm!</p>
    </div>
  );
}
export default Home;