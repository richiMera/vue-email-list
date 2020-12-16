var app = new Vue({

  el: "#root",
  data: {

  mails: [],

  },

  methods: {





  },
  mounted: function() {
    var self = this;
    for (var i = 0; i < 10; i++) {

      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (result) {





          var randomMail = result.data.response
          self.mails.push(randomMail)

        });

    }


    }
  });
