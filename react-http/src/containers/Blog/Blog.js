import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import axios from "axios";

import "./Blog.css";
import Posts from "../../containers/Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path ="/" exact render={() => <h1>Home</h1>}/>
        <Route path ="/new-post" render={() => <h1>Home 2</h1>}/> */}
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
