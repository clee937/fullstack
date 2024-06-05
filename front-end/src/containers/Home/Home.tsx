import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__heading">Welcome to Japanese Onomatopoeia!</h1>
      <h2 className="home__sub-heading">What are onomatopoeia?</h2>
      <p className="home__paragraph">
        In their simplest form, onomatopoeia are words that represent sounds. In
        English, they're words like pop, meow, crackle, and whoosh. We add them
        to our spoken and written language to add something more substantial,
        more visceral. It's like adding color, flavor, or texture to what you're
        saying.
      </p>
      <p className="home__paragraph">
        In Japanese, a language that many people have so inaccurately called
        "vague" in the past, onomatopoeia are there to fill that void. And not
        just in the ways we hear and see them in English or most Western
        European languages.
      </p>
      <h2 className="home__sub-heading">Classification</h2>
      <p className="home__paragraph">
        There are thousands of onomatopoeia in Japanese. Here are 5 categories
        they can be broken up into:
      </p>
      <ul className="home__classifications">
        <li>Giseigo 擬声語 Animal and human sounds.</li>
        <li>
          Giongo 擬音語 Actual sounds made by inanimate objects and nature.
        </li>
        <li>Giseigo 擬声語 Animal and human sounds.</li>
        <li>Giyougo 擬容語 Describe movements and motions.</li>
        <li>Gijougo 擬情語 Describe feelings.</li>
      </ul>
      <p className="home__paragraph">
        Giseigo and giongo are just like onomatopoeia we have in English. The
        cow goes moo. The machine is whirring. They represent real sounds you
        can hear.
      </p>
      <p className="home__paragraph">
        The last three describe what's called mimetic words, or ideophones. They
        describe or represent something that has no sound. The way you feel, the
        way you walk, and even your skin has an onomatopoeia to describe it.
        These mimetic words don't really exist in English, which makes mastering
        them difficult when learning Japanese.
      </p>
      <p className="home__paragraph home__paragraph--source">
        Source: https://www.tofugu.com/japanese/japanese-onomatopoeia/
      </p>
    </section>
  );
};

export default Home;
