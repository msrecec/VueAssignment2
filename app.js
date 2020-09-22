const assignment = Vue.createApp({
  data() {
    return {
      output: '',
      outputOnEnter: ''
    }
  },
  methods: {
    alertMe(value) {
      alert(value);
    },
    inputValue(event) {
      this.output=event.target.value;
    },
    outputValueOnEnter() {
      this.outputOnEnter = this.output;
    },
    inputValueOnEnter(event) {
      this.outputOnEnter = event.target.value;
    }
  }
});

assignment.mount('#assignment');