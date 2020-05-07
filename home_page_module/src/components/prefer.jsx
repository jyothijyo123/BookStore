import React from "react";
const Prefer = props => {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ">
      <a class="nav-item nav-link mr-5" href="/mostPopular"><b>Most Popular</b></a>
      <a class="nav-item nav-link mr-5" href="/newReleases"><b>New Releases</b></a>
      <a class="nav-item nav-link mr-5" href="/mixedCollection"><b>Mixed Collection</b></a>
      <a class="nav-item nav-link mr-5" href="/authorPreference"><b>Author Preference</b></a>
    </div>
  </div>
</nav>

      
</div>
        
    );
};
export default Prefer;