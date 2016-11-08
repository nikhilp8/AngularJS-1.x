<div ng-show="user">
  <b>{{user.login}}</b>
  <img ng-src="{{user.avatar_url}}" />
  
    Order
    <select ng-model="stars">
      <option value="-name">Name</option>
      <option value="-stargazers_count">Stars</option>
      <option value="-language">Language</option>
    </select>
  </div>
  <table ng-show="user">
    <thead>
      <tr>
        <th>Name</th>
        <th>Stars</th>
        <th>Language</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="repo in repos|orderBy:stars">
        <td>{{repo.name}}</td>
        <td>{{repo.stargazers_count |number}}</td>
        <td>{{repo.language}}</td>
      </tr>
    </tbody>
  </table>
