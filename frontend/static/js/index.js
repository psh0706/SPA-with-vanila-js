import DashBoard from "./views/DashBoard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
} 

const router = async () => {
    const routes = [
        { path : "/" , view: DashBoard},
        { path : "/posts" , view: Posts},
        { path : "/settings" , view: Settings },
    ];

    const postentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch : location.pathname === route.path
        }
    });

    let match = postentialMatches.find(potentialMatch => potentialMatch.isMatch); // isMatch가 true인 route만 찾아낼 것임.
    if(!match){
        match = {
            route: routes[0], // path : "/"
            isMatch: true
        }
    }
    
    const view = new match.route.view(); // make instance 
    document.querySelector("#app").innerHTML = await view.getHtml();
    
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=> {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
}); 
// DOM content 가 load 되면 실행.