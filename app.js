const app = Vue.createApp({
    data() {
        this.getRandomUser();
        return {
            loading: true,
        };
    },
    methods: {
        async getRandomUser() {
            this.loading = true;
            fetch("https://randomuser.me/api")
                .then((res) => res.json())
                .then((res) => {
                    this.firstName = res.results[0].name.first;
                    this.lastName = res.results[0].name.last;
                    this.picture = res.results[0].picture.large;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
});

app.mount("#app");
