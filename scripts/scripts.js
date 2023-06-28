const Collections = [
  {
    collectionType: "home",
    collectionId: 1,
  },
  {
    collectionType: "landing ",
    collectionId: 2,
  },
];
const Articles = {
  landing: [
    {
      Title: "LIVE: GREG INGLIS TO ANNOUNCE NRL RETIREMENT",
      Imageurl: "images/greg_inglis.png",
      IntroHeading: "RABBITHOHS STAR",
      Intro: `Greg inglis Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Non, dolore libero suscipit quae
          in esse, a, temporibus deleniti itaque sit laboriosam. Amet
          beatae quisquam consectetur neque illum, enim illo? Beatae!`,
      Published: "2m",
      Speech: "",
    },
    {
      Title: "Opal Tower units still closed as work only approved now",
      Imageurl: "images/opal_2.png",
      Intro: `People are still lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Non, dolore libero suscipit
      quae in esse, a, temporibus deleniti itaque sit laboriosam.
      Amet beatae quisquam consectetur nipsum dolor sit amet
      consectetur, adipisicing elit. Non, dolore libero suseque
      illum, enim illo? Beatae!`,
      IntroHeading: "EXCLUSIVE",
      Published: "1h",
      Speech: "1",
    },
    {
      Title: "One Nation support has crashed: Newspoll",
      Imageurl: "images/one_nation.png",
      Intro: "",
      IntroHeading: "",
      Published: "1h",
      Speech: "",
    },
    {
      Title: "Two fake cops robbed Sydney currency exchange shop",
      Imageurl: "images/cops.png",
      IntroHeading: "",
      Intro: "",
      Published: "3h",
      Speech: "",
    },
  ],
};

const getImgContainer = (article) => `<div class="img-conatiner">
                                            <img
                                            src="${article.Imageurl}"
                                            class="img"
                                            alt="${article.Title}"
                                            />
                                        </div>`;

const getTitle = (
  article,
  className,
  type
) => `<h${type} class="title ${className}">
          <i class="fa fa-plus" aria-hidden="true"></i>
          ${article.Title}
      </h1>`;

const getIntro = (article) => `<p>
                                    <b>${article.IntroHeading}</b> ${article.Intro}
                                </p>`;

const getFooter = (article) => `<div class="footer">
                                    <div class="icon">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span>${article.Published}</span>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-comment-o" aria-hidden="true"></i>
                                        <span>${article.Speech}</span>
                                    </div>
                                </div>`;

const getArticle = (article, indx) => {
  let artcl = "";
  switch (indx) {
    case 0:
      artcl =
        `<article class="main-article"><div class="article-content">` +
        getImgContainer(article) +
        getTitle(article, "", 1) +
        getIntro(article) +
        "</div>" +
        getFooter(article) +
        `</article>`;
      break;
    case 1:
      artcl =
        `<section class="sub-articles">
        <article class="sub-article"><div>` +
        getImgContainer(article) +
        getTitle(article, "", 2) +
        getIntro(article) +
        "</div>" +
        getFooter(article) +
        `</article>`;
      break;
    default:
      artcl =
        `<hr /><article class="article"><div class="content">` +
        getTitle(article, "grey-heading", 3) +
        getImgContainer(article) +
        "</div>" +
        getFooter(article) +
        `</article>`;
  }
  return artcl;
};

const loadArticles = () => {
  const selectedArticles = Articles.landing;
  let articlesHtml = "";
  selectedArticles.forEach((article, index) => {
    articlesHtml +=
      index > 0
        ? getArticle(article, index)
        : getArticle(article, index) + `</section>`;
  });

  document.querySelector(".article-container").innerHTML = articlesHtml;
};
loadArticles();
