Vue.component("Modal", {
  props: ['details'],
  methods: {
    clearDetails() {
      this.$parent.clearDetails();
    },
    stop(e) {
      e.stopPropagation();
    },
  },
  template:`
    <div class="modal-background" v-on:click="clearDetails()">
      <div class="modal-child" @click="stop">
        <div class="details-poster-container">
          <img :src="details.Poster" />
        </div>
        <ul class="media-card-details">
          <li>Title: {{details.Title}}</li>
          <li>Starring: {{details.Actors}}</li>
          <li>Plot: {{details.Plot}}</li>
          <li>Director: {{details.Director}}</li>
          <li>Metascore: {{details.Metascore}}</li>
        </ul>
      </div>
    </div>
`,
});

Vue.component("ListItem", {
  props: ['mediaItem'],
  methods: {
    fetchDetails() {
      this.$parent.fetchDetails(this.mediaItem.imdbID)
    },
  },
  template:`
    <li class="list-item-container" v-on:click="fetchDetails()">
      <div class="poster-container">
        <img :src="mediaItem.Poster" />
      </div>
      <div class="media-details">
        <div class="large-column">{{mediaItem.Title}}</div>
        <div class="column">{{mediaItem.Type}}</div>
        <div class="column">{{mediaItem.Year}}</div>
      </div>
    </li>
  `
});

Vue.component("List", {
  data: {},
  props: ['mediaList'],
  methods: {
    fetchDetails(id) {
      this.$parent.fetchDetails(id)
    },
  },
  template:`
    <div class="list-container">
      <ul>
        <listItem v-for="mediaItem in mediaList" :mediaItem="mediaItem" :key="mediaItem.id"></listItem>
      </ul>
    </div>
  `
});


var app = new Vue({
  el: '#app',
  data() {
    return {
      searchBody: '',
      mediaList: [],
      details: {},
    }
  },
  methods: {
    fetchMediaList: searchCriteria => {
      fetch(`https://www.omdbapi.com/?s=${searchCriteria}&apikey=75a5d7f7`)
        .then(response => response.json())
        .then(json => app.mediaList = json.Search)
    },
    fetchDetails: id => {
      fetch(`https://www.omdbapi.com/?i=${id}&apikey=75a5d7f7`)
        .then(response => response.json())
        .then(json => app.details = json)
    },
    handleSubmit: () => {
      app.fetchMediaList(app.searchBody)
    },
    clearDetails: () => app.details = {},
    blarg: () => alert('oofda!')
  },
  template:`
    <div>
      <Modal v-if="details.Title" :details="details"></Modal>
      <div class="topnav-container">
        <form v-on:submit.prevent="handleSubmit">
          <input type="search"
            v-model="searchBody"
            @blarg = "blarg()"
            placeholder="Search"
          />
        </form>
      </div>
      <List v-bind:media-list='mediaList'></List>
    </div>
`
})