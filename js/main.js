var app = new Vue({

  el: "#root",
  data: {

  mails: [],

  },

  methods: {





  },
  mounted: function() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (result) {

       // app.mails = result.data.response

        // var self = this;

        var randomMail = result.data.response
        for (var i = 0; i < 10; i++) {

          app.mails.push(randomMail);
        }
        console.log(app.mails);
      });
  }
});
