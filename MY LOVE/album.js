new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          title: "the beauty of Shafira Putri Hildaifah",
          isOpen: false,
        },
        {
          img1: "images/fifi4.jpg",
          img2: "images/fifi1.jpg",
          img3: "images/fifi5.png",
          title: "MY HOME",
          isOpen: false,
        },
        {
          img1: "images/fifi6.jpg",
          img2: "images/fifi7.jpg",
          img3: "images/fifi11.jpg",
          title: "MY WORLD",
          isOpen: false,
        },
        {
          img1: "images/fifi8.jpg",
          img2: "images/fifi9.jpg",
          img3: "images/fifi20.jpg",
          title: "MY LOVE",
          isOpen: false,
        },
        {
          img1: "images/fifi18.jpg",
          img2: "images/fifi17.jpg",
          img3: "images/fifi19.jpg",
          title: "MY PRINCESS",
          isOpen: false,
        },
        {
          img1: "images/fifi14.jpg",
          img2: "images/fifi10.jpg",
          img3: "images/fifi13.jpg",
          title: "MY SPIRIT",
          isOpen: false,
        },
        {
          img1: "images/fifi16.jpg",
          img2: "images/fifi21.jpg",
          img3: "images/fifi22.jpg",
          title: "MY EVERYTHING",
          isOpen: false,
        },
        {
          title:"I LOVE YOU SOO MUCHHHH, SHAPIWAAAA <3",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
