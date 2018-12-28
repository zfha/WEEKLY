export default {
  data() {
    return {
      message: 'hello vue',
      count: 0
    };
  },
  methods: {
    add() {
      ++this.count;
    },
    minus() {
      --this.count;
    }
  }
};
