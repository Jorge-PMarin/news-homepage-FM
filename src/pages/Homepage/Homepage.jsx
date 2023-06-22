import Navbar from '../../components/Navbar/Navbar';
import MainArticle from '../../components/MainArticle/MainArticle';
import NewArticle from '../../components/NewArticle/NewArticle';
import Article from '../../components/Article/Article';

//import images for articles
import image1 from '../../assets/images/image-retro-pcs.jpg';
import image2 from '../../assets/images/image-top-laptops.jpg';
import image3 from '../../assets/images/image-gaming-growth.jpg';

//import styles
import './homepage.css';

const mainArticleData = {
  title: 'The bright future of web 3.0?',
  body: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
};

const newArticlesData = [
  {
    title: 'Hydrogen VS Electric Cars',
    body: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    body: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

const articlesData = [
  {
    position: '01',
    title: 'Reviving Retro PCs',
    body: 'What happens when old PCs are given modern upgrades?',
    image: image1,
  },
  {
    position: '02',
    title: 'Top 10 Laptops of 2022',
    body: 'Our best picks for various needs and budgets.',
    image: image2,
  },
  {
    position: '03',
    title: 'The Growth of Gaming',
    body: 'How the pandemic has spaarked fresh opportunities.',
    image: image3,
  },
];

export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <main className="homepage-main">
        <section className="homepage-top">
          <MainArticle
            title={mainArticleData.title}
            body={mainArticleData.body}
          />
          <section className="homepage-new">
            <h2 className="homepage-new-heading">New</h2>
            {newArticlesData.map((article, index) => (
              <NewArticle
                title={article.title}
                body={article.body}
                key={index}
              />
            ))}
          </section>
        </section>

        <section className="homepage-bottom">
          {articlesData.map((article) => (
            <Article
              key={article.position}
              position={article.position}
              title={article.title}
              body={article.body}
              image={article.image}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
