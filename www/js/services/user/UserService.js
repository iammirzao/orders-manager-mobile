angular.module('app.userservice', [])

.factory('UserService', ['$state', '$firebase', '$rootScope',

function($state, $firebase, $rootScope){

  return {
    signUp: function(user) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(function (){
            console.log("Sign up successful!");
            $state.go('ordersManager.login');
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            }
            else{
              alert(errorMessage);
            }
          });
    },

    signIn: function (user){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(function (user){
           console.log("Sign in successful!: ", user);
           $rootScope.user = user;
           $state.go('ordersManager.orders');
         })
         .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          }
          else{
            alert(errorMessage);
          }
        });
      },

      isLoggedIn: function(){
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            return user;
          }
          else {
            // No user is signed in.
            console.log("No user is signed in!");
          }
        });
      },

      updateUser: function (name, newemail) {
        $rootScope.currentUser = firebase.auth().currentUser;
        $rootScope.currentUser.updateProfile({
          displayName: name
        }).then(function() {
            if(newemail != $rootScope.currentUser.email){
              $rootScope.currentUser.updateEmail(newemail);
            }
            console.log("User is updated successful!", $rootScope.currentUser);
        }).catch(function(error) {
          // An error happened.
          alert(error.message);
        });
      }
  };

}]);

