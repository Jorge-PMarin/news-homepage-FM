import Navbar from '../../components/Navbar/Navbar';
import MainArticle from '../../components/MainArticle/MainArticle';
import './homepage.css';
import NewArticle from '../../components/NewArticle/NewArticle';

const mainArticleData = {
  title: "The bright future of web 3.0?",
  body: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
};

const newArticlesData = [
  {
    title: "Hydrogen VS Electric Cars",
    body: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    title: "The Downsides of AI Artistry",
    body: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    title: "Is VC Funding Drying Up?",
    body: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  }
];

export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <main className="homepage-main">
        <MainArticle
          title={mainArticleData.title}
          body={mainArticleData.body}
        />
        <section className="homepage-new">
          <h2 className="homepage-new-heading">New</h2>
          {newArticlesData.map((article, index) => <NewArticle title={article.title} body={article.body} key={index}/>)}
        </section>
      </main>
    </div>
  );
}
