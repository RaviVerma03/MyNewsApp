import React from "react";
import "./task.css";
import datas from "./Fixtures/newsData.json";

class Task extends React.Component {
  // state = {
  //   notificationInfo: {
  //     type: "error",
  //     show: false,
  //     desc: "",
  //   },
  // };

  renderNews = () => {
    return datas.result.slice(0, 5).map(({ title, link}) => (
      <li>
        <article className="box-content">
          <div className="content">
            <p className="divider"></p>
            <h2 className="title">
              <a href={link}>{title}</a>
            </h2>
          </div>
        </article>
      </li>
    ));
  };

  render() {
    console.log(datas.result);
    return (
      <div className="site-layout">
        <div className="news-container">
          <div className="header-container ">
            <div className="toggle-container" onclick="myFunction(this)">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="logo" id="">
              <a href="/" data-action="primary-nav-logo" aria-label="Logo">
                <img
                  src="https://time.com/img/time-logo-red.svg"
                  role="image"
                  alt="Time logo"
                ></img>
              </a>
            </div>
            <div className="text-container">
              <span className="first-text">AMERICA MUST CHANGE</span>
              <span className="text">RACISM AND COVID-19</span>
              <span className="text">INEQUALITY</span>
              <span className="text">BLACK, DISABLED AND AT RISK</span>
              <i className="fa fa-newspaper-o"></i>
              <span className="text">NEWSLETTER</span>
              <div className="search-container">
                <i className="fa fa-search fa-lg fa-fw" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <section className="stories-module new">
            <h1 className="module-title decoration-arrow">new Stories</h1>
            <ol className="news-stories">{this.renderNews()}</ol>
          </section>
          <section className="stories-module issue">
            <div className="heading">
              <h3>Inside the Issue</h3>
            </div>
            <div className="issue-container">
              <div className="main">
                <article className="box-content">
                  <div className="media">
                    <figure>
                      <a href="https://ti.me/305eirS">
                        <img
                          src="https://ak.picdn.net/shutterstock/videos/19836106/thumb/1.jpg"
                          alt=""
                        ></img>
                      </a>
                    </figure>
                  </div>
                </article>{" "}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Task;
