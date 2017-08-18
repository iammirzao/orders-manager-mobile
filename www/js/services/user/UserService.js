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
         console.log("Sign in successfull: ", user);
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

    logOut: function (){
      firebase.auth().signOut()
        .then(function (response){
         console.log("Sign out successfull!");
         $state.go('ordersManager.login');
        })
        .catch(function(error) {
          // An error happened.
          alert(error.message);
        });
    },

    getCurrentUser: function(){
      var user = firebase.auth().currentUser;
      return user;
    },

//    isLoggedIn: function(){
//      firebase.auth().onAuthStateChanged(function(user) {
//        if (user) {
//          return user;
//        }
//        else {
//          // No user is signed in.
//          console.log("No user is signed in!");
//        }
//      });
//    },

    updateUser: function (name, newemail) {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name
      }).then(function() {
          if(newemail != "" && newemail != user.email){
            user.updateEmail(newemail);
          }
          console.log("User is updated successful!", user);
          $state.go('ordersManager.orders');
      }).catch(function(error) {
        // An error happened.
        alert(error.message);
      });
    }
  };

}]);

