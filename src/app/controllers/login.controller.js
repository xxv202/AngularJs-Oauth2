
  angular
  .module("mainApp")
  .controller('LoginController', function(
    $rootScope,
    $scope,
    $state,
    HelperAPI, 
    $window,
    $cookies,
    $base64,
    LocalStorage
  ) {
    var query = {
      method: 'GET',
      url: 'https://login.xero.com/identity/connect/authorize',
      params: {
        response_type : 'code',
        client_id: 'ED7F340B3C6B47E9A53A92FA8E6F94E1',
        redirect_uri: 'http://localhost:3000/callback',
        scope: 'openid profile email accounting.transactions',
        state: '123',
        client_secret: 'Y2ypE5A_oS369fgkfeXd6sILdniInjUmg-IhPHeSgwgqtgoT'
      }
    }
    var needLogin = true;
    function check(){
      /* check login */
      $rootScope.credentials = {
        'access_token' : LocalStorage.get('access_token') || undefined
      };
      console.log('credentials', $rootScope.credentials);
      needLogin = !$rootScope.credentials.access_token;
      /* check login */
      if(!needLogin) { logInResult(true); return; }

      /* get code from result step 1*/
      var code = $cookies.get('code');
      console.log(`code = ${code}`);
      if(!code) { logInResult(false); return; }   
      /* base64 encode */
      var x = $base64.encode(query.params.client_id+':'+query.params.client_secret);
      var y = btoa(query.params.client_id+':'+query.params.client_secret);
      var authorization = x? x: y;
      /* ------------- */
      
      /* get token step 2 */
      HelperAPI.call({
        method: 'POST',
        url: 'https://identity.xero.com/connect/token',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'authorization': 'Basic ' + authorization
        },
        params: {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: query.params.redirect_uri,
        }
      })
      .then(data => {
        let credentials = data.data;
        $cookies.remove('code');
        _.forOwn(credentials, (value, key) => {
          LocalStorage.set(key, value);
        });
        resultLogin(true);
      })
      .catch(error => {
        resultLogin(false);
        console.error(error);
      })
    
    };
    check();
    if(!needLogin) return;
    /* start get code step 1 */
    $window.location.href = `${query.url}?response_type=${query.params.response_type}&client_id=${query.params.client_id}&redirect_uri=${query.params.redirect_uri}&scope=${query.params.scope}&state=${query.params.state}`;
    /*************** FUNCTION ****************/
    function logInResult(result) {
      $scope.resultLogin = result;
      $scope.loggingIn = false;
      console.log('result login -> ', result);
    };

  })
